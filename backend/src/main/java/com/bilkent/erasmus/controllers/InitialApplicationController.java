package com.bilkent.erasmus.controllers;

import com.bilkent.erasmus.dtos.ApplicationPoolSelectionDTO;
import com.bilkent.erasmus.dtos.InitialApplicationDTO.ApplicationErasmusDTO;
import com.bilkent.erasmus.dtos.InitialApplicationDTO.ApplicationExchangeDTO;
import com.bilkent.erasmus.services.InitialApplicationService;
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
    public ResponseEntity<?> sendErasmusApplication(@RequestBody ApplicationErasmusDTO applicationErasmusDTO) throws Exception {
        return new ResponseEntity<>(initialApplicationService.sendApplicationErasmus(applicationErasmusDTO), HttpStatus.CREATED);
    }

    @PostMapping("/create-exchange-application")
    public ResponseEntity<?> sendExchangeApplication(@RequestBody ApplicationExchangeDTO applicationExchangeDTO) throws Exception {
        return new ResponseEntity<>(initialApplicationService.sendApplicationExchange(applicationExchangeDTO), HttpStatus.CREATED);
    }

    @GetMapping("/retrieve-applications")
    public ResponseEntity<?> retrieveApplications(@RequestBody ApplicationPoolSelectionDTO applicationPoolSelectionDTO) {
        return new ResponseEntity(initialApplicationService.retrieveApplications(applicationPoolSelectionDTO), HttpStatus.ACCEPTED);

    }

    @GetMapping("/rank-applications")
    public ResponseEntity<?> rankApplications() {
        return new ResponseEntity(initialApplicationService.rankErasmusApplications(), HttpStatus.ACCEPTED);

    }
}
