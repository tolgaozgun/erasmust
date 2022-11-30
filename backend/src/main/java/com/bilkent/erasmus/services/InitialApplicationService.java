package com.bilkent.erasmus.services;

import com.bilkent.erasmus.dtos.ApplicationPoolSelectionDTO;
import com.bilkent.erasmus.dtos.InitialApplicationDTO.ApplicationErasmusDTO;
import com.bilkent.erasmus.enums.ApplicationPoolType;
import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.mappers.InitialApplicationMappper.ApplicationErasmusMapper;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.ApplicationErasmus;
import com.bilkent.erasmus.repositories.applicationRepositories.ApplicationErasmusRepository;
import com.bilkent.erasmus.repositories.applicationRepositories.CourseRepositories.ApplicationExchangeRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class InitialApplicationService {

    private final ApplicationErasmusRepository applicationErasmusRepository;

    private final ApplicationExchangeRepository applicationExchangeRepository;
    private final ApplicationErasmusMapper applicationErasmusMapper;

    public InitialApplicationService(ApplicationErasmusRepository applicationErasmusRepository, ApplicationExchangeRepository applicationExchangeRepository,
                                     ApplicationErasmusMapper applicationErasmusMapper) {
        this.applicationErasmusRepository = applicationErasmusRepository;
        this.applicationExchangeRepository = applicationExchangeRepository;
        this.applicationErasmusMapper = applicationErasmusMapper;
    }

    public ApplicationErasmusDTO sendApplication(ApplicationErasmusDTO applicationErasmusDTO) {
        ApplicationErasmus applicationErasmus = applicationErasmusMapper.toEntity(applicationErasmusDTO);
        applicationErasmus.setStatus(Status.IN_PROCESS);
        return applicationErasmusMapper.toApplicationErasmusDTO(applicationErasmusRepository.save(applicationErasmus));
    }

    public List<ApplicationErasmus> retrieveApplications(ApplicationPoolSelectionDTO applicationPoolSelectionDTO) {

        ApplicationPoolType poolType = applicationPoolSelectionDTO.getApplicationPoolType();
        List<ApplicationErasmus> applications = null;
        Status status;
        switch (poolType) {

            // Case statements
            case APPLICATIONS_APPROVED:
                log.info("applications approved will be listed");
                break;
            case APPLICATIONS_REJECTED:
                log.info("applications rejected will be listed");
                break;
            case APPLICATIONS_IN_THE_WAITING_LIST:
                log.info("applications in the waiting list will be listed");
                break;
            case APPLICATIONS_IN_PROCESS:
                log.info("All received applications before the deadline will be listed");
                status = Status.IN_PROCESS;
                applications = getApprovedApplications(status);
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

    private List<ApplicationErasmus> getApprovedApplications(Status status) {
        return applicationErasmusRepository.findAllByStatus(status);
    }
}
