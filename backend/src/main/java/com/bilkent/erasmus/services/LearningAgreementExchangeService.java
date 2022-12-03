package com.bilkent.erasmus.services;

import com.bilkent.erasmus.repositories.applicationRepositories.LearningAgreementErasmusRepository;
import com.bilkent.erasmus.repositories.applicationRepositories.LearningAgreementExchangeRepository;
import org.springframework.stereotype.Service;

@Service
public class LearningAgreementExchangeService {

    private final LearningAgreementExchangeRepository formErasmusRepository;

    public LearningAgreementExchangeService(LearningAgreementExchangeRepository formErasmusRepository){
        this.formErasmusRepository = formErasmusRepository;
    }

}
