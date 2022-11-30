package com.bilkent.erasmus.controllers;

import com.bilkent.erasmus.models.userModels.StudentModels.Student;
import com.bilkent.erasmus.services.StudentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/student")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @PostMapping("/save")
    public ResponseEntity<?> saveStudent(@RequestBody Student student) {
        return new ResponseEntity<>(studentService.saveStudent(student), HttpStatus.CREATED);
    }

    @GetMapping("/find/{name}")
    public ResponseEntity<?> findStudent(@PathVariable String name) {
        return new ResponseEntity<>(studentService.findStudentByName(name), HttpStatus.FOUND);
    }
}
