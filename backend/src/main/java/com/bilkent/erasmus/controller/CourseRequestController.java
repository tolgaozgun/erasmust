package com.bilkent.erasmus.controller;

import com.bilkent.erasmus.dto.CourseRequestDTO;
import com.bilkent.erasmus.service.CourseRequestFormDetailService;
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
