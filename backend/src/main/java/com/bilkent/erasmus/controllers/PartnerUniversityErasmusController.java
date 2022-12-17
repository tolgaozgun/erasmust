package com.bilkent.erasmus.controllers;

import com.bilkent.erasmus.services.PartnerUniversityErasmusService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/universities")
public class PartnerUniversityErasmusController {
    private final PartnerUniversityErasmusService partnerUniversityErasmusService;

    public PartnerUniversityErasmusController(PartnerUniversityErasmusService partnerUniversityErasmusService) {
        this.partnerUniversityErasmusService = partnerUniversityErasmusService;
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAll() {
        return new ResponseEntity<>(partnerUniversityErasmusService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/all-by-student-department")
    public ResponseEntity<?> getAllByStudentDepartment() {
        return new ResponseEntity<>(partnerUniversityErasmusService.findByStudentDepartment(), HttpStatus.OK);
    }

}
