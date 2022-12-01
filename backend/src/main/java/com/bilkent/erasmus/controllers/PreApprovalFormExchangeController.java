package com.bilkent.erasmus.controllers;

import com.bilkent.erasmus.services.PreApprovalFormExchangeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/preapproval-exchange")
public class PreApprovalFormExchangeController { //todo can be merged under base preapproval

    private final PreApprovalFormExchangeService exchangeService;

    public PreApprovalFormExchangeController(PreApprovalFormExchangeService exchangeService) {
        this.exchangeService = exchangeService;
    }

   // @PostMapping("/send")
  //  public ResponseEntity<?> saveForm()
}
