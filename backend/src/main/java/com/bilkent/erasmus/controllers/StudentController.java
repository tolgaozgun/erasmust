package com.bilkent.erasmus.controllers;

import com.bilkent.erasmus.models.userModels.StudentModels.Student;
import com.bilkent.erasmus.repositories.PartnerUniversityErasmusRepository;
import com.bilkent.erasmus.services.StudentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/student")
public class StudentController {

    private final StudentService studentService;
    private final PartnerUniversityErasmusRepository partnerUniversityErasmusRepository;

    public StudentController(StudentService studentService, PartnerUniversityErasmusRepository partnerUniversityErasmusRepository) {
        this.studentService = studentService;
        this.partnerUniversityErasmusRepository = partnerUniversityErasmusRepository;
    }

    @PostMapping("/save")
    public ResponseEntity<?> saveStudent(@RequestBody Student student) {
        return new ResponseEntity<>(studentService.saveStudent(student), HttpStatus.CREATED);
    }

    @GetMapping("/find/{name}")
    public ResponseEntity<?> findStudent(@PathVariable String name) {
        return new ResponseEntity<>(studentService.findStudentByName(name), HttpStatus.FOUND);
    }

    @GetMapping("/retrieveAllSchools")
    public ResponseEntity<?> retrieveAllSchools() {
        return new ResponseEntity<>(partnerUniversityErasmusRepository.findAll(), HttpStatus.OK);
    }
}
