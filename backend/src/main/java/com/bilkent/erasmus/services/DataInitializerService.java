package com.bilkent.erasmus.services;

import com.bilkent.erasmus.repositories.PartnerUniversityErasmusRepository;
import org.springframework.stereotype.Service;

@Service
public class DataInitializerService {

    private final PartnerUniversityErasmusRepository partnerUniversityErasmusRepository;

    public DataInitializerService(PartnerUniversityErasmusRepository partnerUniversityErasmusRepository) {
        this.partnerUniversityErasmusRepository = partnerUniversityErasmusRepository;
    }
}
