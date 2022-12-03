package com.bilkent.erasmus.services.preApprovalService;

import com.bilkent.erasmus.repositories.PartnerUniversityExchangeRepository;
import com.bilkent.erasmus.repositories.applicationRepositories.PreApprovalFormExchangeDetailRepository;
import com.bilkent.erasmus.repositories.applicationRepositories.PreApprovalFormExchangeRepository;
import org.springframework.stereotype.Service;

@Service
public class PreApprovalFormExchangeService {

    private final PreApprovalFormExchangeRepository exchangeRepository;

    private final PreApprovalFormExchangeDetailRepository exchangeDetailRepository;

    private final PartnerUniversityExchangeRepository universityExchangeRepository;

    public PreApprovalFormExchangeService(PreApprovalFormExchangeRepository exchangeRepository, PreApprovalFormExchangeDetailRepository exchangeDetailRepository,
                                          PartnerUniversityExchangeRepository universityExchangeRepository) {
        this.exchangeRepository = exchangeRepository;
        this.exchangeDetailRepository = exchangeDetailRepository;
        this.universityExchangeRepository = universityExchangeRepository;
    }
}
