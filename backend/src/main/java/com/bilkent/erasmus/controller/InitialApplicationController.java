package com.bilkent.erasmus.controller;

import com.bilkent.erasmus.dto.ApplicationPoolSelectionDTO;
import com.bilkent.erasmus.dto.InitialApplicationDTO.ApplicationErasmusDTO;
import com.bilkent.erasmus.dto.InitialApplicationDTO.ApplicationExchangeDTO;
import com.bilkent.erasmus.service.InitialApplicationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/initial-application")
public class InitialApplicationController {

    private final InitialApplicationService initialApplicationService;

    public InitialApplicationController(InitialApplicationService initialApplicationService) {
        this.initialApplicationService = initialApplicationService;
    }

    @PostMapping("/create-erasmus-application")
    public ResponseEntity<?> sendErasmusApplication(@RequestBody ApplicationErasmusDTO applicationErasmusDTO) {
        return new ResponseEntity<>(initialApplicationService.sendApplication(applicationErasmusDTO), HttpStatus.CREATED);
    }

    @PostMapping("/create-exchange-application")
    public ResponseEntity<?> sendExchangeApplication(@RequestBody ApplicationExchangeDTO applicationExchangeDTO) {
        return new ResponseEntity(true, HttpStatus.CREATED); // initialApplicationService.sendExchangeApplication(applicationExchangeDTO)
    }

    @GetMapping("/retrieve-applications")
    public ResponseEntity<?> retrieveApplications(@RequestBody ApplicationPoolSelectionDTO applicationPoolSelectionDTO) {
        return new ResponseEntity(initialApplicationService.retrieveApplications(applicationPoolSelectionDTO), HttpStatus.ACCEPTED);

    }
}
