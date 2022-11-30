package com.bilkent.erasmus.controller;
import com.bilkent.erasmus.service.CourseReviewFormService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/course-review")
public class CourseReviewFormController {

    private final CourseReviewFormService courseReviewFormService;


    public CourseReviewFormController(CourseReviewFormService courseReviewFormService) {
        this.courseReviewFormService = courseReviewFormService;
    }
}