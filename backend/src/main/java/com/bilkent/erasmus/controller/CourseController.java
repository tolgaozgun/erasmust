package com.bilkent.erasmus.controller;

import com.bilkent.erasmus.dto.CourseDTO;
import com.bilkent.erasmus.service.CourseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/course")
public class CourseController {

    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @PostMapping("/add")
    public ResponseEntity<?> addCourse(@RequestBody CourseDTO courseDTO) {
        return new ResponseEntity<>(courseService.addCourse(courseDTO), HttpStatus.CREATED);
    }
}
