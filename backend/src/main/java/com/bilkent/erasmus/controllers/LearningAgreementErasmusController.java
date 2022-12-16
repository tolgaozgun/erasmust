package com.bilkent.erasmus.controllers;

import com.bilkent.erasmus.dtos.InitialApplicationDTO.ApplicationErasmusDTO;
import com.bilkent.erasmus.dtos.InitialApplicationDTO.LearningAgreementDTO;
import com.bilkent.erasmus.services.LearningAgreementErasmusService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/learning-agreement-erasmus")
public class LearningAgreementErasmusController {

    private final LearningAgreementErasmusService erasmusService;

    public LearningAgreementErasmusController(LearningAgreementErasmusService erasmusService) {
        this.erasmusService = erasmusService;
    }

/*    @PostMapping("/create-learning-agreement")
    public ResponseEntity<?> sendLearningAgreement(@RequestBody LearningAgreementDTO learningAgreementDTO) throws Exception {
        return new ResponseEntity<>(LearningAgreementErasmusService.saveForm(learningAgreementDTO), HttpStatus.CREATED);
    }

    @GetMapping("/retrieve-learning-agreement")
    public ResponseEntity<?> retrieveLearningAgreement(@RequestBody LearningAgreementDTO learningAgreementDTO) throws Exception {
    return new ResponseEntity(LearningAgreementErasmusService.retrieveAgreement(learningAgreementDTO), HttpStatus.ACCEPTED);
    }*/
}
