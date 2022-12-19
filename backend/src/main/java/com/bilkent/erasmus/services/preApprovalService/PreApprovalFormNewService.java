package com.bilkent.erasmus.services.preApprovalService;

import com.bilkent.erasmus.dtos.CourseReviewFormCreation;
import com.bilkent.erasmus.dtos.CourseReviewFormResponseDTO;
import com.bilkent.erasmus.dtos.InitialApplicationDTO.PreApprovalFormDTO;
import com.bilkent.erasmus.dtos.PreApprovalFormDtos.PreApprovalFormDTONew;
import com.bilkent.erasmus.dtos.PreApprovalFormEditDTO;
import com.bilkent.erasmus.enums.CourseApprovalStatus;
import com.bilkent.erasmus.enums.SemesterOfferings;
import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.enums.ToDoType;
import com.bilkent.erasmus.mappers.PreApprovalFormEditMapper;
import com.bilkent.erasmus.mappers.PreApprovalFormMapper.PreApprovalFormErasmusMapper;
import com.bilkent.erasmus.models.FileData;
import com.bilkent.erasmus.models.ToDoItem;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.ApplicationErasmus;
import com.bilkent.erasmus.models.applicationModels.PreApprovalForms.CourseReviewFormNew;
import com.bilkent.erasmus.models.applicationModels.PreApprovalForms.PreApprovalFormNew;
import com.bilkent.erasmus.models.applicationModels.courseReviewForms.CourseReviewForm;
import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudent;
import com.bilkent.erasmus.repositories.CourseBilkentRepository;
import com.bilkent.erasmus.repositories.PreApprovalFormRepositories.PreApprovalFormRepositoryNew;
import com.bilkent.erasmus.repositories.ToDoItemRepository;
import com.bilkent.erasmus.repositories.applicationRepositories.ApplicationErasmusRepository;
import com.bilkent.erasmus.repositories.studentRepository.OutGoingStudentRepository;
import com.bilkent.erasmus.services.CourseHostService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
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

    private final ToDoItemRepository toDoItemRepository;

    public PreApprovalFormNewService(PreApprovalFormErasmusMapper preApprovalFormErasmusMapper
            , PreApprovalFormRepositoryNew preApprovalFormRepository
            , CourseHostService courseHostService
            , CourseBilkentRepository courseBilkentRepository
            , CourseReviewFormServiceNew courseReviewFormService
            , OutGoingStudentRepository outGoingStudentRepository
            , ApplicationErasmusRepository erasmusRepository
            , PreApprovalFormEditMapper editMapper, ToDoItemRepository toDoItemRepository) {
        this.preApprovalFormErasmusMapper = preApprovalFormErasmusMapper;
        this.preApprovalFormRepository = preApprovalFormRepository;
        this.courseHostService = courseHostService;
        this.courseBilkentRepository = courseBilkentRepository;
        this.courseReviewFormService = courseReviewFormService;
        this.outGoingStudentRepository = outGoingStudentRepository;
        this.applicationErasmusRepository = erasmusRepository;
        this.editMapper = editMapper;
        this.toDoItemRepository = toDoItemRepository;
    }

    public PreApprovalFormNew saveForm(PreApprovalFormDTONew form) throws Exception {
        PreApprovalFormNew preApprovalForm = PreApprovalFormNew.builder()
                .forms(createCourseReviewFormAll(form.getForms()))
                .date(System.currentTimeMillis())
                .build();
        inheritInfoFromApplication(preApprovalForm);
        ToDoItem todo = new ToDoItem();
        todo.setType(ToDoType.PREAPPROVAL);
        preApprovalFormRepository.save(preApprovalForm);
        todo.setKey(preApprovalForm.getId());
        todo.setTitle("Review preapproval");
        toDoItemRepository.save(todo);
        return preApprovalForm;
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
        OutGoingStudent student = outGoingStudentRepository.findByStarsId(auth.getName()).orElseThrow(()-> new EntityNotFoundException());
        return student.getId();
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
            log.info("reqeuest payload: " + form.getForms().get(0).getCourseHost().getName());
            log.info(preApprovalForm.getForms().get(0).getCourseHost().getName());
        }
        return preApprovalFormErasmusMapper.toPreApprovalFormDTONew(preApprovalForm);

    }
    public List<PreApprovalFormDTONew> getAllPreapprovalStudent() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        try {
            List <PreApprovalFormNew> preApprovalFormNews = preApprovalFormRepository.findAllByStudent_StarsId(auth.getName());
            return preApprovalFormErasmusMapper.toPreApprovalFormDTONewList(preApprovalFormNews);

        }catch(EntityNotFoundException e) {
            log.info("Student doesn't have a preapproval form");
            return null;
        }
    }

    public List<PreApprovalFormDTONew> getAllPreapproval() {
        return preApprovalFormErasmusMapper.toPreApprovalFormDTONewList(preApprovalFormRepository.findAll());
    }

    public PreApprovalFormNew getStudentForm() throws Exception {
        return preApprovalFormRepository.findByStatusAndStudent_Id(Status.IN_PROCESS, findStudentId())
                .orElseThrow(() -> new Exception("no form is found"));
    }

    public List<CourseReviewFormNew> gelAllReviewFormsForCourseCoordinator() {
        String starsId = getStarsId();
        List<CourseReviewFormNew> reviewForms = new ArrayList<>();
        List<PreApprovalFormNew> copyList = preApprovalFormRepository.findAll();
        for (PreApprovalFormNew form : copyList) {
            for (CourseReviewFormNew reviewForm : form.getForms()) {
                if (reviewForm.getCourseBilkent().getCourseCoordinator().getStarsId().equals(starsId)
                && reviewForm.getCourseBilkent().getIsMustCourse()) {
                    reviewForms.add(reviewForm);
                }
            }
        }
        return reviewForms;
    }

    private String getStarsId() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return auth.getName();
    }
    public List<CourseReviewFormNew> getAllReviewFormsForExchangeCoordinator() {
        String starsId = getStarsId();
        log.info("exchange coordinator id: " + starsId);
        List<CourseReviewFormNew> reviewForms = new ArrayList<>();
        List<PreApprovalFormNew> copyList = preApprovalFormRepository.findAll();
        for (PreApprovalFormNew form : copyList) {
            for (CourseReviewFormNew reviewForm : form.getForms()) {
                if (form.getExchangeCoordinator().getStarsId().equals(starsId)
                && !reviewForm.getCourseBilkent().getIsMustCourse()) {
                    reviewForms.add(reviewForm);
                }
            }
        }
        return reviewForms;
    }

    public List<CourseReviewFormNew> getAllCourseReviewFormsForStudent() throws Exception {
        PreApprovalFormNew preApprovalForm = getStudentForm();
        return preApprovalForm.getForms();
    }

    public PreApprovalFormNew getPreapprovalByIdForStudent(int id) {
        return preApprovalFormRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("no pre approval form is found"));
    }

    public CourseReviewFormResponseDTO getCourseReviewFormForStudent(int id) {
        PreApprovalFormNew form = preApprovalFormRepository.findByFormsId(id);
        CourseReviewFormNew formReview = courseReviewFormService.getCourseReviewFormByIdForStudent(id);
        CourseReviewFormResponseDTO reviewForm = CourseReviewFormResponseDTO.builder()
                .id(id)
                .courseBilkent(formReview.getCourseBilkent())
                .courseHost(formReview.getCourseHost())
                .files(formReview.getFiles())
                .status(formReview.getStatus())
                .coordinatorReply(formReview.getCoordinatorReply())
                .requirements(formReview.getRequirements())
                .date(formReview.getDate())
                .academicYear(form.getAcademicYear())
                .semester(form.getSemester())
                .firstName(form.getStudent().getFirstName())
                .lastName(form.getStudent().getLastName()).build();

        log.info(form.getStudent().getFirstName());
        return reviewForm;
    }
}

