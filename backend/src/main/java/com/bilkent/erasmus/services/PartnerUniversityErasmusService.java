package com.bilkent.erasmus.services;

import com.bilkent.erasmus.dtos.PartnerUniversityErasmusDTO;
import com.bilkent.erasmus.mappers.PartnerUniversityErasmusMapper;
import com.bilkent.erasmus.repositories.PartnerUniversityErasmusRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service

public class PartnerUniversityErasmusService {
    private final PartnerUniversityErasmusRepository partnerUniversityErasmusRepository;
    private final PartnerUniversityErasmusMapper partnerUniversityErasmusMapper;

    public PartnerUniversityErasmusService(PartnerUniversityErasmusRepository partnerUniversityErasmusRepository, PartnerUniversityErasmusMapper partnerUniversityErasmusMapper) {
        this.partnerUniversityErasmusRepository = partnerUniversityErasmusRepository;
        this.partnerUniversityErasmusMapper = partnerUniversityErasmusMapper;
    }

    public List<PartnerUniversityErasmusDTO> getAll() {
        return partnerUniversityErasmusMapper.toErasmusUniversityListDTO(partnerUniversityErasmusRepository.findAll());
    }
}
