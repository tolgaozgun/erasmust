package com.bilkent.erasmus.services;

import com.bilkent.erasmus.repositories.applicationRepositories.LearningAgreementErasmusRepository;
import org.springframework.stereotype.Service;

@Service
public class LearningAgreementErasmusService {

    private final LearningAgreementErasmusRepository formErasmusRepository;

    public LearningAgreementErasmusService(LearningAgreementErasmusRepository formErasmusRepository){
        this.formErasmusRepository = formErasmusRepository;
    }
}
