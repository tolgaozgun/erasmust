package com.bilkent.erasmus.controllers;

import com.bilkent.erasmus.dtos.InitialApplicationDTO.PreApprovalFormDTO;
import com.bilkent.erasmus.services.preApprovalService.PreApprovalFormErasmusService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pre-approval")
public class PreApprovalFormErasmusController {

    private final PreApprovalFormErasmusService erasmusService;

    public PreApprovalFormErasmusController(PreApprovalFormErasmusService erasmusService) {
        this.erasmusService = erasmusService;
    }
    @PostMapping("/save")
    public ResponseEntity<?> savePreApprovalForm(@RequestBody PreApprovalFormDTO form) throws Exception{
        return new ResponseEntity<>(erasmusService.saveForm(form), HttpStatus.CREATED);
    }
}
