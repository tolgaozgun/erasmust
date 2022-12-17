package com.bilkent.erasmus.services;

import com.bilkent.erasmus.dtos.PartnerUniversityErasmusDTO;
import com.bilkent.erasmus.enums.DepartmentName;
import com.bilkent.erasmus.mappers.PartnerUniversityErasmusMapper;
import com.bilkent.erasmus.repositories.PartnerUniversityErasmusRepository;
import com.bilkent.erasmus.repositories.studentRepository.OutGoingStudentRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
@Service

public class PartnerUniversityErasmusService {
    private final PartnerUniversityErasmusRepository partnerUniversityErasmusRepository;
    private final PartnerUniversityErasmusMapper partnerUniversityErasmusMapper;
    private final OutGoingStudentRepository outGoingStudentRepository;

    public PartnerUniversityErasmusService(PartnerUniversityErasmusRepository partnerUniversityErasmusRepository, PartnerUniversityErasmusMapper partnerUniversityErasmusMapper, OutGoingStudentRepository outGoingStudentRepository) {
        this.partnerUniversityErasmusRepository = partnerUniversityErasmusRepository;
        this.partnerUniversityErasmusMapper = partnerUniversityErasmusMapper;
        this.outGoingStudentRepository = outGoingStudentRepository;
    }

    public List<PartnerUniversityErasmusDTO> getAll() {
        return partnerUniversityErasmusMapper.toErasmusUniversityListDTO(partnerUniversityErasmusRepository.findAll());
    }

    public List<PartnerUniversityErasmusDTO> findByStudentDepartment() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        DepartmentName dep = outGoingStudentRepository.findByStarsId(auth.getName()).get().getDepartmentName();
        return partnerUniversityErasmusMapper.toErasmusUniversityListDTO(partnerUniversityErasmusRepository.findAllByDepartment(dep));
    }
}
