package com.bilkent.erasmus.controllers;

import com.bilkent.erasmus.dtos.InitialApplicationDTO.PreApprovalFormDTO;
import com.bilkent.erasmus.services.preApprovalService.PreApprovalFormService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/preapproval")
public class PreApprovalFormController { //todo can be merged under base preapproval

    private final PreApprovalFormService preApprovalFormService;

    public PreApprovalFormController(PreApprovalFormService preApprovalFormService) {
        this.preApprovalFormService = preApprovalFormService;
    }


    @PostMapping("/send")
    public ResponseEntity<?> sendForm(@RequestBody PreApprovalFormDTO form) {
        return new ResponseEntity<>(preApprovalFormService.sendForm(form), HttpStatus.CREATED);
    }
}
