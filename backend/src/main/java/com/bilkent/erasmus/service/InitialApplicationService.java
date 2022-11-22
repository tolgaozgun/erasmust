package com.bilkent.erasmus.service;

import com.bilkent.erasmus.dto.InitialApplicationDTO.ApplicationErasmusDTO;
import com.bilkent.erasmus.mapper.InitialApplicationMappper.ApplicationErasmusMapper;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.ApplicationErasmus;
import com.bilkent.erasmus.repository.applicationRepositories.InitialApplicationRepository;
import org.springframework.stereotype.Service;

@Service
public class InitialApplicationService {

    private final InitialApplicationRepository initialApplicationRepository;

    private final ApplicationErasmusMapper applicationErasmusMapper;

    public InitialApplicationService(InitialApplicationRepository initialApplicationRepository, ApplicationErasmusMapper applicationErasmusMapper) {
        this.initialApplicationRepository = initialApplicationRepository;
        this.applicationErasmusMapper = applicationErasmusMapper;
    }

    public ApplicationErasmusDTO sendApplication(ApplicationErasmusDTO applicationErasmusDTO) {
        ApplicationErasmus applicationErasmus = applicationErasmusMapper.toEntity(applicationErasmusDTO);
        return applicationErasmusMapper.toApplicationErasmusDTO(initialApplicationRepository.save(applicationErasmus));
    }
}
