package com.bilkent.erasmus.controllers;

import com.bilkent.erasmus.dtos.CourseBilkentDTO;
import com.bilkent.erasmus.dtos.CourseDTO;
import com.bilkent.erasmus.exceptions.EntityDoesNotExistException;
import com.bilkent.erasmus.services.CourseBilkentService;
import com.bilkent.erasmus.services.CourseHostService;
import com.bilkent.erasmus.services.CourseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import java.util.Map;

@RestController
@RequestMapping("/course")
public class CourseController {

    private final CourseService courseService;
    private final CourseBilkentService courseBilkentService;
    private final CourseHostService courseHostService;


    public CourseController(CourseService courseService
            , CourseBilkentService courseBilkentService
            , CourseHostService courseHostService) {
        this.courseService = courseService;
        this.courseBilkentService = courseBilkentService;
        this.courseHostService = courseHostService;
    }

    @PostMapping("/add")
    public ResponseEntity<?> addCourse(@RequestBody CourseDTO courseDTO) {
        return new ResponseEntity<>(courseService.addCourse(courseDTO), HttpStatus.CREATED);
    }

    @GetMapping("/all-bilkent-courses")
    public ResponseEntity<?> allBilkentCourses() {
        return new ResponseEntity<>(courseBilkentService.getAll(), HttpStatus.OK);
    }

    @RolesAllowed("ROLE_COURSE_COORDINATOR")
    @PostMapping("/set-requirement")
    public ResponseEntity<?> setRequirement(@RequestBody Map<String, String> json) throws EntityDoesNotExistException {
        return new ResponseEntity<>(courseBilkentService.setRequirements(json.get("requirements")), HttpStatus.OK);
    }

    @GetMapping("/previously-approved")
    public ResponseEntity<?> getPreviouslyApproved() {
        return new ResponseEntity<>(courseHostService.getAllPreviouslyApproved(), HttpStatus.OK);
    }

    @RolesAllowed("ROLE_ADMIN")
    @PostMapping("/edit/{id}")
    public ResponseEntity<?> edit(@PathVariable int id, @RequestBody CourseBilkentDTO dto) throws EntityDoesNotExistException {
        return new ResponseEntity<>(courseBilkentService.edit(dto, id), HttpStatus.OK);
    }
}
