package com.bilkent.erasmus.services.preApprovalService;

import com.bilkent.erasmus.dtos.CourseReviewFormFillRequest;
import com.bilkent.erasmus.dtos.InitialApplicationDTO.PreApprovalFormDTO;
import com.bilkent.erasmus.enums.SemesterOfferings;
import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.PreApprovalFormErasmus;
import com.bilkent.erasmus.models.applicationModels.courseReviewForms.CourseReviewForm;
import com.bilkent.erasmus.models.compositeModels.CoordinatorStudentErasmus;
import com.bilkent.erasmus.models.compositeModels.PreApprovalFormErasmusDetail;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import com.bilkent.erasmus.repositories.CoordinatorStudentErasmusRepository;
import com.bilkent.erasmus.repositories.PartnerUniversityErasmusRepository;
import com.bilkent.erasmus.repositories.applicationRepositories.PreApprovalFormErasmusDetailRepository;
import com.bilkent.erasmus.repositories.applicationRepositories.PreApprovalFormErasmusRepository;
import com.bilkent.erasmus.services.CourseHostService;
import com.bilkent.erasmus.services.CourseReviewFormService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PreApprovalFormErasmusService {

    private final PreApprovalFormErasmusRepository erasmusRepository;

    private final PreApprovalFormErasmusDetailRepository erasmusDetailRepository;

    private final PartnerUniversityErasmusRepository universityErasmusRepository;

    private final CourseReviewFormService courseReviewFormService;

    private final CourseHostService courseHostService;

    private final CoordinatorStudentErasmusRepository coordinatorStudentErasmusRepository;

    public PreApprovalFormErasmusService(PreApprovalFormErasmusRepository erasmusRepository, PreApprovalFormErasmusDetailRepository erasmusDetailRepository,
                                         PartnerUniversityErasmusRepository universityErasmusRepository, CourseReviewFormService courseReviewFormService, CourseHostService courseHostService, CoordinatorStudentErasmusRepository coordinatorStudentErasmusRepository) {
        this.erasmusRepository = erasmusRepository;
        this.erasmusDetailRepository = erasmusDetailRepository;
        this.universityErasmusRepository = universityErasmusRepository;
        this.courseReviewFormService = courseReviewFormService;
        this.courseHostService = courseHostService;
        this.coordinatorStudentErasmusRepository = coordinatorStudentErasmusRepository;
    }


    public PreApprovalFormDTO saveForm(PreApprovalFormDTO form) throws Exception {

        PreApprovalFormErasmus erasmusForm = createEmptyPreApprovalForm(form.getAcademicYear(), form.getSemester());
        ;
        createMappingObject(erasmusForm, createCourseReviewForms(form.getCourseBilkentIds(), saveAllHostCourses(
                form.getCourseHostNames()
                ,form.getCourseHostDepartments()
                ,form.getCourseHostCredits()
        )), form.getStudentId());
        return null;
    }

    private void createMappingObject(PreApprovalFormErasmus erasmusForm,
                                                             List<CourseReviewForm> reviewForms, int studentId) {
        for (CourseReviewForm form : reviewForms) {
            PreApprovalFormErasmusDetail formErasmusDetail = new PreApprovalFormErasmusDetail();
            formErasmusDetail.setPreApprovalForm(erasmusForm);
            formErasmusDetail.setReviewForm(form);
            formErasmusDetail.setCoordinatorStudent(coordinatorStudentErasmusRepository.findByStudent_Id(studentId));
            erasmusDetailRepository.save(formErasmusDetail);
        }
    }

    private PreApprovalFormErasmus createEmptyPreApprovalForm(String academicYear, SemesterOfferings semester) {
        PreApprovalFormErasmus form = new PreApprovalFormErasmus();
        form.setStatus(Status.IN_PROCESS);
        form.setAcademicYear(academicYear);
        form.setSemester(semester);
        return erasmusRepository.save(form);
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
