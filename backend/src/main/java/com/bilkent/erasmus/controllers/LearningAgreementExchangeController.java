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


    /* @PostMapping("/create-learning-agreement")
    public ResponseEntity<?> sendLearningAgreement(@RequestBody LearningAgreementDTO learningAgreementDTO) throws Exception {
        return new ResponseEntity<>(LearningAgreementExchangeService.saveForm(learningAgreementDTO), HttpStatus.CREATED);
    }

    @GetMapping("/retrieve-learning-agreement")
    public ResponseEntity<?> retrieveLearningAgreement(@RequestBody LearningAgreementDTO learningAgreementDTO) throws Exception {
    return new ResponseEntity(LearningAgreementExchangeService.retrieveAgreement(learningAgreementDTO), HttpStatus.ACCEPTED);
    }*/

}

