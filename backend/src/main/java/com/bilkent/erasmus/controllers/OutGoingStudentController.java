package com.bilkent.erasmus.controllers;

import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudentErasmus;
import com.bilkent.erasmus.services.OutGoingStudentService;
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


    //@PostMapping("/erasmus/save")
    //@PostMapping("/exchange/save")
    @PostMapping("/save")
    public ResponseEntity<?> saveErasmusStudent(@RequestBody OutGoingStudentErasmus student) {
        return new ResponseEntity<>(outGoingStudentService.saveErasmusStudent(student), HttpStatus.CREATED);
    }

}
