package com.bilkent.erasmus.controller;

import com.bilkent.erasmus.models.StudentModels.OutGoingStudentErasmus;
import com.bilkent.erasmus.models.StudentModels.Student;
import com.bilkent.erasmus.service.OutGoingStudentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/student-erasmus")
public class OutGoingStudentController {

    private final OutGoingStudentService outGoingStudentService;

    public OutGoingStudentController(OutGoingStudentService outGoingStudentService) {
        this.outGoingStudentService = outGoingStudentService;
    }

    @PostMapping("/save")
    public ResponseEntity<?> saveErasmusStudent(@RequestBody OutGoingStudentErasmus student) {
        return new ResponseEntity<>(outGoingStudentService.saveErasmusStudent(student), HttpStatus.CREATED);
    }

}
