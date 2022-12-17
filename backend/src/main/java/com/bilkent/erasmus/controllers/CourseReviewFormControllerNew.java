package com.bilkent.erasmus.controllers;

import com.bilkent.erasmus.dtos.CourseReviewEditDTO;
import com.bilkent.erasmus.dtos.CourseReviewFormFillRequest;
import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import com.bilkent.erasmus.repositories.CourseBilkentRepository;
import com.bilkent.erasmus.repositories.CourseHostRepository;
import com.bilkent.erasmus.services.preApprovalService.CourseReviewFormServiceNew;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/course-review-v2")
public class CourseReviewFormControllerNew {

    private final CourseReviewFormServiceNew courseReviewFormService;

    private final CourseBilkentRepository courseBilkentRepository;

    private final CourseHostRepository courseHostRepository;

    public CourseReviewFormControllerNew(CourseReviewFormServiceNew courseReviewFormService, CourseBilkentRepository courseBilkentRepository, CourseHostRepository courseHostRepository) {
        this.courseReviewFormService = courseReviewFormService;
        this.courseBilkentRepository = courseBilkentRepository;
        this.courseHostRepository = courseHostRepository;
    }

    @PostMapping("/save")
    public ResponseEntity<?> sendForm(@RequestBody CourseReviewFormFillRequest basicForm) throws Exception {

        CourseBilkent courseBilkent = courseBilkentRepository.findById(basicForm.getBilkentCourseId())
                .orElseThrow(() -> new Exception("no bilkent course found"));
        CourseHost courseHost = courseHostRepository.findById(basicForm.getHostCourseId())
                .orElseThrow(() -> new Exception("no host course found"));
        double credit = 4;
        return new ResponseEntity<>(courseReviewFormService.createForm(courseBilkent, courseHost, credit), HttpStatus.CREATED);
    }

    @PostMapping("/edit")
    public ResponseEntity<?> editForm(@RequestPart("data") CourseReviewEditDTO editDTO,
                                      @RequestParam("file") MultipartFile[] files) throws Exception {
        return new ResponseEntity<>(courseReviewFormService.editForm(editDTO, files),HttpStatus.ACCEPTED);
    }

}
