package com.bilkent.erasmus.controllers;
import com.bilkent.erasmus.dtos.InitialApplicationDTO.ApplicationErasmusDTO;
import com.bilkent.erasmus.exceptions.EntityDoesNotExistException;
import com.bilkent.erasmus.services.ApplicationErasmusService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;

@RestController
@RequestMapping("/erasmus-application")
public class ApplicationErasmusController {

    private final ApplicationErasmusService applicationErasmusService;

    public ApplicationErasmusController( ApplicationErasmusService applicationErasmusService) {
        this.applicationErasmusService = applicationErasmusService;
    }

    // todo --> check added universities' uniquenessx

    @RolesAllowed({"ROLE_STUDENT", "ROLE_ADMIN"})
    @PostMapping("/create")
    public ResponseEntity<?> createErasmusApplication(@RequestBody ApplicationErasmusDTO applicationErasmusDTO) throws Exception {
        return new ResponseEntity<>(applicationErasmusService.createErasmusApplication(applicationErasmusDTO), HttpStatus.CREATED);
    }

    @RolesAllowed({"ROLE_STUDENT", "ROLE_ADMIN"})
    @PatchMapping("/edit")
    public ResponseEntity<?> editErasmusApplication(@RequestBody ApplicationErasmusDTO applicationErasmusDTO) throws Exception {
        return new ResponseEntity<>(applicationErasmusService.editErasmusApplication(applicationErasmusDTO), HttpStatus.OK);
    }

    @RolesAllowed({"ROLE_STUDENT", "ROLE_ADMIN"})
    @PostMapping("/cancel")
    public ResponseEntity<?> cancelErasmusApplication() throws Exception {
        applicationErasmusService.cancelErasmusApplication();
        return new ResponseEntity<>("Application cancelled", HttpStatus.OK);
    }

    @RolesAllowed({"ROLE_ERASMUS_COORDINATOR", "ROLE_ADMIN"})
    @PostMapping("/place")
    public ResponseEntity<?> placeStudents(){
        applicationErasmusService.placeStudents();
        return new ResponseEntity<>("students placed", HttpStatus.OK);
    }

    @RolesAllowed({"ROLE_ERASMUS_COORDINATOR", "ROLE_ADMIN"})
    @PostMapping("/reevaluate")
    public ResponseEntity<?> reevaluateApplications(){
        applicationErasmusService.reevaluateApplications();
        return new ResponseEntity<>("applications reevaluated", HttpStatus.OK);
    }
    @RolesAllowed("ROLE_STUDENT")
    @GetMapping("/view-application")
    public ResponseEntity<?> viewApplication(){
        return new ResponseEntity<>(applicationErasmusService.viewApplication(), HttpStatus.OK);
    }

    @RolesAllowed({"ROLE_ERASMUS_COORDINATOR", "ROLE_ADMIN"})
    @GetMapping("/all-applications")
    public ResponseEntity<?> viewAllApplication() {
        return new ResponseEntity<>(applicationErasmusService.viewAllApplications(), HttpStatus.OK);
    }

    @RolesAllowed("ROLE_STUDENT")
    @GetMapping("/student/view-application-by-id/{id}")
    public ResponseEntity<?> viewApplication(@PathVariable int id) throws EntityDoesNotExistException {
        return new ResponseEntity<>(applicationErasmusService.viewApplicationById(id), HttpStatus.OK);
    }

    @RolesAllowed("ROLE_STUDENT")
    @GetMapping("/student/view-application-all")
    public ResponseEntity<?> viewApplicationAllForStudent() {
        return new ResponseEntity<>(applicationErasmusService.viewApplicationStudentAll(), HttpStatus.OK);
    }



}

