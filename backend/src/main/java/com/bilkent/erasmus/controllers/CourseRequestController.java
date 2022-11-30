package com.bilkent.erasmus.controllers;

import com.bilkent.erasmus.dtos.CourseRequestDTO;
import com.bilkent.erasmus.services.CourseRequestFormDetailService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/course-request")
public class CourseRequestController {

    private final CourseRequestFormDetailService courseRequestFormDetailService;

    public CourseRequestController(CourseRequestFormDetailService courseRequestFormDetailService) {
        this.courseRequestFormDetailService = courseRequestFormDetailService;
    }

    @PostMapping("/create")
    public ResponseEntity<?> sendCourseRequestForm(@RequestBody CourseRequestDTO courseRequestDTO) {
        return new ResponseEntity<>(courseRequestFormDetailService.sendForm(courseRequestDTO), HttpStatus.ACCEPTED);
    }

}
