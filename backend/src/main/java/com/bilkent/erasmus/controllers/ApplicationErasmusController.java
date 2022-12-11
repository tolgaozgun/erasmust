package com.bilkent.erasmus.controllers;

import com.bilkent.erasmus.dtos.InitialApplicationDTO.ApplicationExchangeDTO;
import com.bilkent.erasmus.services.ApplicationErasmusService;
import com.bilkent.erasmus.services.InitialApplicationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/erasmus-application")
public class ApplicationErasmusController {

    private final InitialApplicationService initialApplicationService;
    private final ApplicationErasmusService applicationErasmusService;

    public ApplicationErasmusController(InitialApplicationService initialApplicationService, ApplicationErasmusService applicationErasmusService) {
        this.initialApplicationService = initialApplicationService;
        this.applicationErasmusService = applicationErasmusService;
    }

    @PostMapping("/place")
    public ResponseEntity<?> placeStudents(){
        applicationErasmusService.placeStudents();
        return new ResponseEntity<>("students placed", HttpStatus.CREATED);
    }

    @PostMapping("/reevaluate")
    public ResponseEntity<?> reevaluateApplications(){
        applicationErasmusService.reevaluateApplications();
        return new ResponseEntity<>("applications reevaluated", HttpStatus.CREATED);
    }
}

