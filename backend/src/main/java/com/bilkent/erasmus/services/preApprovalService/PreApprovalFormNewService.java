package com.bilkent.erasmus.services.preApprovalService;

import com.bilkent.erasmus.dtos.CourseReviewFormCreation;
import com.bilkent.erasmus.dtos.PreApprovalFormDtos.PreApprovalFormDTONew;
import com.bilkent.erasmus.dtos.PreApprovalFormEditDTO;
import com.bilkent.erasmus.enums.SemesterOfferings;
import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.mappers.PreApprovalFormEditMapper;
import com.bilkent.erasmus.mappers.PreApprovalFormMapper.PreApprovalFormErasmusMapper;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.ApplicationErasmus;
import com.bilkent.erasmus.models.applicationModels.PreApprovalForms.CourseReviewFormNew;
import com.bilkent.erasmus.models.applicationModels.PreApprovalForms.PreApprovalFormNew;
import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudent;
import com.bilkent.erasmus.repositories.CourseBilkentRepository;
import com.bilkent.erasmus.repositories.PreApprovalFormRepositories.PreApprovalFormRepositoryNew;
import com.bilkent.erasmus.repositories.applicationRepositories.ApplicationErasmusRepository;
import com.bilkent.erasmus.repositories.studentRepository.OutGoingStudentRepository;
import com.bilkent.erasmus.services.CourseHostService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class PreApprovalFormNewService {

    private final PreApprovalFormErasmusMapper preApprovalFormErasmusMapper;

    private final PreApprovalFormRepositoryNew preApprovalFormRepository;

    private final CourseHostService courseHostService;

    private final CourseBilkentRepository courseBilkentRepository;

    private final CourseReviewFormServiceNew courseReviewFormService;

    private final OutGoingStudentRepository outGoingStudentRepository;

    private final ApplicationErasmusRepository applicationErasmusRepository;

    private final PreApprovalFormEditMapper editMapper;


    public PreApprovalFormNewService(PreApprovalFormErasmusMapper preApprovalFormErasmusMapper
            , PreApprovalFormRepositoryNew preApprovalFormRepository
            , CourseHostService courseHostService
            , CourseBilkentRepository courseBilkentRepository
            , CourseReviewFormServiceNew courseReviewFormService
            , OutGoingStudentRepository outGoingStudentRepository
            , ApplicationErasmusRepository erasmusRepository
            , PreApprovalFormEditMapper editMapper) {
        this.preApprovalFormErasmusMapper = preApprovalFormErasmusMapper;
        this.preApprovalFormRepository = preApprovalFormRepository;
        this.courseHostService = courseHostService;
        this.courseBilkentRepository = courseBilkentRepository;
        this.courseReviewFormService = courseReviewFormService;
        this.outGoingStudentRepository = outGoingStudentRepository;
        this.applicationErasmusRepository = erasmusRepository;
        this.editMapper = editMapper;
    }

    public PreApprovalFormNew saveForm(PreApprovalFormDTONew form) throws Exception {
        PreApprovalFormNew preApprovalForm = PreApprovalFormNew.builder()
                .forms(createCourseReviewFormAll(form.getForms()))
                .build();
        inheritInfoFromApplication(preApprovalForm);
        return preApprovalFormRepository.save(preApprovalForm);
    }

    private CourseHost createHostCourse(CourseReviewFormCreation formCreation) {
        return courseReviewFormService.createCourseHost(formCreation.getCourseHostName(), formCreation.getCourseHostCredit());
    }

    private List<CourseHost> createHostCourseAll(List<CourseReviewFormCreation> list) {
        List<CourseHost> copyList = new ArrayList<>();
        for (CourseReviewFormCreation form : list) {
            copyList.add(createHostCourse(form));
        }
        return copyList;
    }

    private CourseReviewFormNew createCourseReviewForm(CourseReviewFormCreation formCreation) throws Exception {
        CourseBilkent courseBilkent = courseBilkentRepository.findById(formCreation.getCourseBilkentId())
                        .orElseThrow(() -> new Exception("no course is found"));
        CourseHost courseHost = createHostCourse(formCreation);
        return courseReviewFormService.createForm(courseBilkent, courseHost, courseHost.getCreditECTS());
    }

    public List<CourseReviewFormNew> createCourseReviewFormAll(List<CourseReviewFormCreation> list) throws Exception {
        List<CourseReviewFormNew> copyList = new ArrayList<>();
        for (CourseReviewFormCreation form : list) {
            copyList.add(createCourseReviewForm(form));
        }
        return copyList;
    }

    private void inheritInfoFromApplication(PreApprovalFormNew preApprovalFormNew) {
        preApprovalFormNew.setStatus(Status.IN_PROCESS);
        preApprovalFormNew.setSemester(SemesterOfferings.FALL);
        preApprovalFormNew.setAcademicYear("2022-2023");
        preApprovalFormNew.setStudent(retrieveApplicationFromStudentId().getStudent());
        preApprovalFormNew.setExchangeCoordinator(retrieveApplicationFromStudentId().getCoordinator());
    }

    private int findStudentId() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        log.info("stars id: " + auth.getName());
        List<OutGoingStudent> list = outGoingStudentRepository.findAll();
        log.info(list.get(0).getStarsId() + " " + list.get(1).getStarsId() );
        return outGoingStudentRepository.findByStarsId(auth.getName()).getId();
    }

    private ApplicationErasmus retrieveApplicationFromStudentId() {
        ApplicationErasmus application = applicationErasmusRepository.findByStudent_Id(findStudentId());
        if (application != null)
            return application;
        else
            return null;
    }

    public PreApprovalFormDTONew editForm(int id, PreApprovalFormEditDTO form) throws Exception {
        PreApprovalFormNew preApprovalForm = preApprovalFormRepository.findById(id)
                .orElseThrow(()-> new Exception("Application with ID " + id + "does not exist"));
        if (preApprovalForm.getStatus().equals(Status.IN_PROCESS)) {
            log.info(preApprovalForm.toString());
            form.setId(id);
            editMapper.updatePreApprovalFormNewFromDTO(form, preApprovalForm);
            log.info(preApprovalForm.toString());
        }
        return preApprovalFormErasmusMapper.toPreApprovalFormDTONew(preApprovalForm);

    }
}
