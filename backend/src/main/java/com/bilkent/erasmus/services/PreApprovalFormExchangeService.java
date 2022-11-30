package com.bilkent.erasmus.services;

import com.bilkent.erasmus.repositories.applicationRepositories.PreApprovalFormExchangeDetailRepository;
import com.bilkent.erasmus.repositories.applicationRepositories.PreApprovalFormExchangeRepository;
import org.springframework.stereotype.Service;

@Service
public class PreApprovalFormExchangeService {

    private final PreApprovalFormExchangeDetailRepository detailRepository;

    private final PreApprovalFormExchangeRepository formExchangeRepository;

    public PreApprovalFormExchangeService(PreApprovalFormExchangeDetailRepository detailRepository, PreApprovalFormExchangeRepository formExchangeRepository) {
        this.detailRepository = detailRepository;
        this.formExchangeRepository = formExchangeRepository;
    }

}
