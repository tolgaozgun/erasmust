package com.bilkent.erasmus.controllers;

import com.bilkent.erasmus.dtos.CourseDTO;
import com.bilkent.erasmus.services.CourseBilkentService;
import com.bilkent.erasmus.services.CourseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/course")
public class CourseController {

    private final CourseService courseService;
    private final CourseBilkentService courseBilkentService;


    public CourseController(CourseService courseService, CourseBilkentService courseBilkentService) {
        this.courseService = courseService;
        this.courseBilkentService = courseBilkentService;
    }

    @PostMapping("/add")
    public ResponseEntity<?> addCourse(@RequestBody CourseDTO courseDTO) {
        return new ResponseEntity<>(courseService.addCourse(courseDTO), HttpStatus.CREATED);
    }

    @GetMapping("/all-bilkent-courses")
    public ResponseEntity<?> allBilkentCourses() {
        return new ResponseEntity<>(courseBilkentService.getAll(), HttpStatus.OK);
    }

    @PostMapping("/set-requirement")
    public ResponseEntity<?> setRequirement(@RequestBody Map<String, String> json) {
        return new ResponseEntity<>(courseBilkentService.setRequirements(json.get("requirements")), HttpStatus.OK);
    }
}
