package com.bilkent.erasmus.controllers;

import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudent;
import com.bilkent.erasmus.services.AdminService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;

@RestController
@RequestMapping("/admin")
public class AdminController {
    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping("/add-outgoing-student")
    public ResponseEntity<?> addOutgoingStudent(@RequestBody OutGoingStudent outgoingStudent) {
        adminService.createOutgoingStudent(outgoingStudent);
        return new ResponseEntity<>("Student registered", HttpStatus.CREATED);
    }

    @RolesAllowed("ROLE_ADMIN")
    @GetMapping("/all-students")
    public ResponseEntity<?> getAllStudents() {
        return new ResponseEntity<>(adminService.getAllStudents(), HttpStatus.OK);
    }


}
