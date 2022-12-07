package com.bilkent.erasmus.services;

import com.bilkent.erasmus.repositories.applicationRepositories.LearningAgreementExchangeRepository;
import org.springframework.stereotype.Service;

@Service
public class LearningAgreementExchangeService {

    private final LearningAgreementExchangeRepository formExchangeRepository;

    public LearningAgreementExchangeService(LearningAgreementExchangeRepository formExchangeRepository){
        this.formExchangeRepository = formExchangeRepository;
    }

}
