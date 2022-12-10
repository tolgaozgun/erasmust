package com.bilkent.erasmus.services.preApprovalService;

import com.bilkent.erasmus.dtos.CourseReviewFormFillRequest;
import com.bilkent.erasmus.dtos.InitialApplicationDTO.PreApprovalFormDTO;
import com.bilkent.erasmus.enums.SemesterOfferings;
import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.PreApprovalFormErasmus;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.PreApprovalFormExchange;
import com.bilkent.erasmus.models.applicationModels.courseReviewForms.CourseReviewForm;
import com.bilkent.erasmus.models.compositeModels.PreApprovalFormErasmusDetail;
import com.bilkent.erasmus.models.compositeModels.PreApprovalFormExchangeDetail;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import com.bilkent.erasmus.repositories.CoordinatorStudentExchangeRepository;
import com.bilkent.erasmus.repositories.PartnerUniversityExchangeRepository;
import com.bilkent.erasmus.repositories.applicationRepositories.PreApprovalFormExchangeDetailRepository;
import com.bilkent.erasmus.repositories.applicationRepositories.PreApprovalFormExchangeRepository;
import com.bilkent.erasmus.services.CourseHostService;
import com.bilkent.erasmus.services.CourseReviewFormService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PreApprovalFormExchangeService {

    private final PreApprovalFormExchangeRepository exchangeRepository;

    private final PreApprovalFormExchangeDetailRepository exchangeDetailRepository;

    private final PartnerUniversityExchangeRepository universityErasmusRepository;

    private final CourseReviewFormService courseReviewFormService;

    private final CourseHostService courseHostService;

    private final CoordinatorStudentExchangeRepository coordinatorStudentExchangeRepository;

    public PreApprovalFormExchangeService(PreApprovalFormExchangeRepository exchangeRepository
            ,PreApprovalFormExchangeDetailRepository exchangeDetailRepository
            ,PartnerUniversityExchangeRepository universityErasmusRepository
            ,CourseReviewFormService courseReviewFormService
            ,CourseHostService courseHostService
            ,CoordinatorStudentExchangeRepository coordinatorStudentExchangeRepository) {

        this.exchangeRepository = exchangeRepository;
        this.exchangeDetailRepository = exchangeDetailRepository;
        this.universityErasmusRepository = universityErasmusRepository;
        this.courseReviewFormService = courseReviewFormService;
        this.courseHostService = courseHostService;
        this.coordinatorStudentExchangeRepository = coordinatorStudentExchangeRepository;
    }

    public PreApprovalFormExchange saveErasmusForm(PreApprovalFormDTO form) throws Exception {
        PreApprovalFormExchange exchangeForm = createEmptyPreApprovalForm(form.getAcademicYear(), form.getSemester());
        createMappingObject(exchangeForm, createCourseReviewForms(form.getCourseBilkentIds(), saveAllHostCourses(
                form.getCourseHostNames()
                ,form.getCourseHostDepartments()
                ,form.getCourseHostCredits()
        )), form.getStudentId());
        return exchangeForm;
    }

    private void createMappingObject(PreApprovalFormExchange exchangeForm,
                                     List<CourseReviewForm> reviewForms, int studentId) {
        for (CourseReviewForm form : reviewForms) {
            PreApprovalFormExchangeDetail formExchangeDetail = new PreApprovalFormExchangeDetail();
            formExchangeDetail.setPreApprovalForm(exchangeForm);
            formExchangeDetail.setReviewForm(form);
            formExchangeDetail.setCoordinatorStudent(coordinatorStudentExchangeRepository.findByStudent_Id(studentId));
            exchangeDetailRepository.save(formExchangeDetail);
        }
    }

    private PreApprovalFormExchange createEmptyPreApprovalForm(String academicYear, SemesterOfferings semester) {
        PreApprovalFormExchange form = new PreApprovalFormExchange();
        form.setStatus(Status.IN_PROCESS);
        form.setAcademicYear(academicYear);
        form.setSemester(semester);
        return exchangeRepository.save(form);
    }

    private List<CourseReviewForm> createCourseReviewForms(List<Integer> courseBilkentIds, List<CourseHost> coursesHost) throws Exception {
        List<CourseReviewForm> forms = new ArrayList<>();
        for (int i = 0; i < coursesHost.size(); i++) {
            CourseReviewFormFillRequest formFillRequest = new CourseReviewFormFillRequest(
                    courseBilkentIds.get(i)
                    ,coursesHost.get(i).getId()
                    ,null
            );
            forms.add(courseReviewFormService.fillReviewForm(formFillRequest));
        }
        return forms;
    }


    private CourseHost saveCourseHost(String name, double credit) {
        CourseHost course = new CourseHost();
        course.setName(name);
        // course.setUnderDepartment(department);
        course.setCreditECTS(credit);
        return courseHostService.save(course);
    }

    private List<CourseHost> saveAllHostCourses(List<String> courseNames, List<String> departments, List<Double> credits) {
        List<CourseHost> courseHosts = new ArrayList<>();
        for (int i = 0; i < courseNames.size(); i++) {
            courseHosts.add(
                    saveCourseHost(
                            courseNames.get(i)
                            ,credits.get(i)
                    )
            );
        }
        return courseHosts;
    }

}
