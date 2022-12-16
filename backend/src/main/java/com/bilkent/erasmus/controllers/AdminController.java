package com.bilkent.erasmus.controllers;

import com.bilkent.erasmus.models.enums.Status;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudent;
import com.bilkent.erasmus.services.AdminService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import java.util.Map;

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

    @RolesAllowed("ROLE_ADMIN")
    @GetMapping("/all-applications")
    public ResponseEntity<?> getAllApplications() {
        return new ResponseEntity<>(adminService.getAllErasmusApplications(), HttpStatus.OK);
    }
    @RolesAllowed("ROLE_ADMIN")
    @GetMapping("/all-applications-status")
    public ResponseEntity<?> getAllApplicationsByStatus(@RequestBody Map<String, String> json) {
        return new ResponseEntity<>(adminService.getAllErasmusApplicationsByStatus(json.get("status")), HttpStatus.OK);
    }
    @RolesAllowed("ROLE_ADMIN")
    @GetMapping("/all-applications-coordinator")
    public ResponseEntity<?> getAllApplicationsCoordinator(@RequestBody Map<String, String> json) {
        String coordinatorStarsId = json.get("coordinatorStarsId");
        String status = json.get("status");
        return new ResponseEntity<>(adminService.getAllErasmusApplicationsByCoordinator(coordinatorStarsId, status), HttpStatus.OK);
    }

    @RolesAllowed("ROLE_ADMIN")
    @GetMapping("/all-applications-student")
    public ResponseEntity<?> getAllApplicationsStudent(@RequestBody Map<String, String> json) {
        String studentStarsId = json.get("studentStarsId");
        String status = json.get("status");
        return new ResponseEntity<>(adminService.getAllErasmusApplicationsStudentStarsId(studentStarsId, status), HttpStatus.OK);
    }


}
