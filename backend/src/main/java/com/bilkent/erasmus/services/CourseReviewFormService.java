package com.bilkent.erasmus.services;

import com.bilkent.erasmus.dtos.CourseReviewFormFillRequest;
import com.bilkent.erasmus.enums.CourseApprovalStatus;
import com.bilkent.erasmus.models.applicationModels.courseReviewForms.CourseReviewForm;
import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import com.bilkent.erasmus.repositories.CoordinatorStudentErasmusRepository;
import com.bilkent.erasmus.repositories.CourseBilkentRepository;
import com.bilkent.erasmus.repositories.CourseHostRepository;
import com.bilkent.erasmus.repositories.applicationRepositories.CourseReviewFormRepository;
import lombok.Data;
import org.springframework.stereotype.Service;
@Data
@Service
public class CourseReviewFormService {

    private final CourseReviewFormRepository courseReviewFormRepository;

    private final CourseBilkentRepository courseBilkentRepository;

    private final CourseHostRepository courseHostRepository;

    private final CoordinatorStudentErasmusRepository coordinatorStudentErasmusRepository;

    public CourseReviewFormService(CourseReviewFormRepository courseReviewFormRepository, CourseBilkentRepository courseBilkentRepository,
                                   CourseHostRepository courseHostRepository, CoordinatorStudentErasmusRepository coordinatorStudentErasmusRepository) {
        this.courseReviewFormRepository = courseReviewFormRepository;
        this.courseBilkentRepository = courseBilkentRepository;
        this.courseHostRepository = courseHostRepository;
        this.coordinatorStudentErasmusRepository = coordinatorStudentErasmusRepository;
    }

    public CourseReviewForm fillReviewForm(CourseReviewFormFillRequest requestBody) throws Exception {

        CourseBilkent courseBilkent = courseBilkentRepository.findById(
                requestBody.getBilkentCourseId()).orElseThrow(() -> new Exception("not found with id: " + requestBody.getBilkentCourseId()));
        CourseHost courseHost = courseHostRepository.findById(
                requestBody.getHostCourseId()).orElseThrow(() -> new Exception("not found with id: " + requestBody.getHostCourseId()));
        CourseReviewForm form = new CourseReviewForm();
        form.setStatus(CourseApprovalStatus.ON_PROCESS);
        form.setCourseBilkent(courseBilkent);
        form.setCourseHost(courseHost);
        return courseReviewFormRepository.save(form);
    }





/*
    public CourseReviewFormErasmusDTO sendReviewFormErasmus(CourseReviewFormErasmusDTO courseReviewFormDTO) {
        CourseReviewFormErasmus courseReviewForm = courseReviewFormMapper.toEntity(courseReviewFormDTO);
        courseReviewForm.setStatus(CourseApprovalStatus.ON_PROCESS);
        return courseReviewFormMapper.toCourseReviewFormErasmusDTO(courseReviewFormRepository.save(courseReviewForm));
    }
    public CourseReviewFormExchangeDTO sendReviewFormExchange(CourseReviewFormExchangeDTO courseReviewFormDTO) {
        CourseReviewFormExchange courseReviewForm = courseReviewFormMapper.toEntity(courseReviewFormDTO);
        courseReviewForm.setStatus(CourseApprovalStatus.ON_PROCESS);
        return courseReviewFormMapper.toCourseReviewFormExchangeDTO(courseReviewFormRepository.save(courseReviewForm));
    }

    public void approveForm(int id) {
        CourseReviewForm form = courseReviewFormRepository.findById(id).get();
        form.setStatus(CourseApprovalStatus.APPROVED);
        courseReviewFormRepository.save(form);
    }

    public void declineForm(int id) {
        CourseReviewForm form = courseReviewFormRepository.findById(id).get();
        form.setStatus(CourseApprovalStatus.DECLINED);
        courseReviewFormRepository.save(form);
    }

//    public CourseReviewFormDTO sendReviewForm(CourseReviewFormDTO courseReviewFormDTO) {
//        if (courseReviewFormDTO.getType().equalsIgnoreCase("Erasmus")) {
//
//        }
//        CourseReviewFormExchange courseReviewForm = courseReviewFormMapper.toEntity(courseReviewFormDTO);
//        courseReviewForm.setFormStatus(CourseApprovalStatus.ON_PROCESS);
//        return courseReviewFormMapper.toCourseReviewFormExchangeDTO(courseReviewFormRepository.save(courseReviewForm));
//    }
*/
    //todo form.setStatus kullanmak doğru mu????

}
