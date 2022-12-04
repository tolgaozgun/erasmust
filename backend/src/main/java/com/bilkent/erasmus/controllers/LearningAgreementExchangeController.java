package com.bilkent.erasmus.controllers;

import com.bilkent.erasmus.services.LearningAgreementExchangeService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/learning-agreement-exchange")
public class LearningAgreementExchangeController {

    private final LearningAgreementExchangeService exchangeService;

    public LearningAgreementExchangeController(LearningAgreementExchangeService exchangeService) {
        this.exchangeService = exchangeService;
    }
}
