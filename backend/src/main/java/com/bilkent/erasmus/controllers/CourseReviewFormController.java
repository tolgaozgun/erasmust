package com.bilkent.erasmus.controllers;
import com.bilkent.erasmus.services.CourseReviewFormService;
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