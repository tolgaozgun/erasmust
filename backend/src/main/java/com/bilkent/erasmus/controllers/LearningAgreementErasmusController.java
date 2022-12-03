package com.bilkent.erasmus.controllers;

import com.bilkent.erasmus.services.LearningAgreementErasmusService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/learning-agreement-erasmus")
public class LearningAgreementErasmusController {

    private final LearningAgreementErasmusService erasmusService;

    public LearningAgreementErasmusController(LearningAgreementErasmusService erasmusService) {
        this.erasmusService = erasmusService;
    }
}
