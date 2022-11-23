package com.bilkent.erasmus.service;

import com.bilkent.erasmus.dto.ApplicationPoolSelectionDTO;
import com.bilkent.erasmus.dto.InitialApplicationDTO.ApplicationErasmusDTO;
import com.bilkent.erasmus.enums.ApplicationPoolType;
import com.bilkent.erasmus.mapper.InitialApplicationMappper.ApplicationErasmusMapper;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.ApplicationErasmus;
import com.bilkent.erasmus.repository.applicationRepositories.InitialApplicationRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
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

    public List<ApplicationErasmus> retrieveApplications(ApplicationPoolSelectionDTO applicationPoolSelectionDTO) {

        ApplicationPoolType poolType = applicationPoolSelectionDTO.getApplicationPoolType();
        ArrayList<ApplicationErasmus> applications = new ArrayList<>();
        switch (poolType) {

            // Case statements
            case APPLICATIONS_APPROVED:
                log.info("applications approved will be listed");
                break;
            case APPLICATIONS_REJECTED:
                log.info("applications rejected will be listed");
                break;
            case APPLICATIONS_IN_WAITING_LIST:
                log.info("applications in the waiting list will be listed");
                break;
            case APPLICATIONS_DECLINED_BY_STUDENT:
                // --> by fetching this data, students in the waiting list will be updated accordingly
                log.info("approved by exchange coordinator and applications declined by student will be listed");
                break;
            case APPLICATIONS_CONFIRMED_BY_STUDENT:
                log.info("approved by exchange coordinator and confirmed by student applications swill be listed");
                break;
            default:
                // --> create generic exception package to trace errors
                log.info("throw exception");
                break;
        }
        return applications;
    }
}
