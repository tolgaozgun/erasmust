package com.bilkent.erasmus.controllers;

import com.bilkent.erasmus.dtos.InitialApplicationDTO.PreApprovalFormDTO;
import com.bilkent.erasmus.services.preApprovalService.PreApprovalFormExchangeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pre-approval/exchange")
public class PreApprovalFormExchangeController {

    private final PreApprovalFormExchangeService exchangeService;

    public PreApprovalFormExchangeController(PreApprovalFormExchangeService exchangeService) {
        this.exchangeService = exchangeService;
    }

    @PostMapping("/save")
    public ResponseEntity<?> savePreApprovalForm(@RequestBody PreApprovalFormDTO formDTO) throws Exception{
        return new ResponseEntity<>(exchangeService.saveErasmusForm(formDTO), HttpStatus.CREATED);
    }
}
