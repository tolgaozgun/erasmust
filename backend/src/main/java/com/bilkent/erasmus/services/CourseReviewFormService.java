package com.bilkent.erasmus.services;

import com.bilkent.erasmus.dtos.*;
import com.bilkent.erasmus.models.compositeModels.PreApprovalFormErasmusDetail;
import com.bilkent.erasmus.models.enums.CourseApprovalStatus;
import com.bilkent.erasmus.models.applicationModels.courseReviewForms.CourseReviewForm;
import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import com.bilkent.erasmus.repositories.CoordinatorStudentErasmusRepository;
import com.bilkent.erasmus.repositories.CourseBilkentRepository;
import com.bilkent.erasmus.repositories.CourseHostRepository;
import com.bilkent.erasmus.repositories.applicationRepositories.CourseReviewFormRepository;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.List;

@Data
@Service
@Slf4j
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
    @Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
    public List<CourseReviewForm> list(ReviewFormListDTO filter) {
        log.info("Process filtering for course review form is running.");
        Page<CourseReviewForm> page = courseReviewFormRepository.findAll((root, query, criteriaBuilder) -> {
            query.distinct(true);
            query.orderBy(criteriaBuilder.asc(root.get("id")));
            List<Predicate> predicates = new ArrayList<>();

            if (filter.getStatus() != null) {
                predicates.add(criteriaBuilder.and(criteriaBuilder.equal(root.get("status"), filter.getStatus())));
            }
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        }, PageRequest.of(0, 10));
        log.info("Process filtering is successfully completed.");
        return page.getContent();
    }
    public CourseReviewForm reviewForm(ReviewFormRequestDTO request, int id) throws Exception {
        CourseReviewForm form = courseReviewFormRepository.findById(id)
                .orElseThrow(() -> new Exception("course review form with id: " + id + "not found" ));
        form.setStatus(request.getStatus());
        courseReviewFormRepository.save(form);
        return form;
    }

    public List<CourseReviewForm> listForStudent(ReviewFormStudentListDTO filter) {
        log.info("Process filtering for student course review form is running.");

        return null;
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
