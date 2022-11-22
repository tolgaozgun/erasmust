package com.bilkent.erasmus.controller;

import com.bilkent.erasmus.dto.InitialApplicationDTO.ApplicationErasmusDTO;
import com.bilkent.erasmus.service.InitialApplicationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/initial-application")
public class InitialApplicationController {

    private final InitialApplicationService initialApplicationService;

    public InitialApplicationController(InitialApplicationService initialApplicationService) {
        this.initialApplicationService = initialApplicationService;
    }

    @PostMapping("/create")
    public ResponseEntity<?> sendApplication(@RequestBody ApplicationErasmusDTO applicationErasmusDTO) {
        return new ResponseEntity<>(initialApplicationService.sendApplication(applicationErasmusDTO), HttpStatus.CREATED);
    }
}
