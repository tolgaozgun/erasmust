package com.bilkent.erasmus.services;

import com.bilkent.erasmus.dtos.ApplicationPoolSelectionDTO;
import com.bilkent.erasmus.dtos.InitialApplicationDTO.ApplicationErasmusDTO;
import com.bilkent.erasmus.dtos.InitialApplicationDTO.ApplicationExchangeDTO;
import com.bilkent.erasmus.enums.ApplicationPoolType;
import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.mappers.InitialApplicationMappper.ApplicationErasmusMapper;
import com.bilkent.erasmus.mappers.InitialApplicationMappper.ApplicationExchangeMapper;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.Application;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.ApplicationErasmus;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.ApplicationExchange;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudentErasmus;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudentExchange;
import com.bilkent.erasmus.repositories.applicationRepositories.ApplicationErasmusRepository;
import com.bilkent.erasmus.repositories.applicationRepositories.ApplicationExchangeRepository;
import com.bilkent.erasmus.repositories.studentRepository.OutGoingStudentErasmusRepository;
import com.bilkent.erasmus.repositories.studentRepository.OutGoingStudentExchangeRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
@Slf4j
public class InitialApplicationService {

    private final ApplicationErasmusRepository applicationErasmusRepository;

    private final OutGoingStudentErasmusRepository outGoingStudentErasmusRepository;
    private final OutGoingStudentExchangeRepository outGoingStudentExchangeRepository;

    private final ApplicationExchangeRepository applicationExchangeRepository;
    private final ApplicationErasmusMapper applicationErasmusMapper;
    private final ApplicationExchangeMapper applicationExchangeMapper;

    public InitialApplicationService(ApplicationErasmusRepository applicationErasmusRepository, OutGoingStudentErasmusRepository outGoingStudentErasmusRepository,
                                     OutGoingStudentExchangeRepository outGoingStudentExchangeRepository, ApplicationExchangeRepository applicationExchangeRepository,
                                     ApplicationErasmusMapper applicationErasmusMapper, ApplicationExchangeMapper applicationExchangeMapper) {
        this.applicationErasmusRepository = applicationErasmusRepository;
        this.outGoingStudentErasmusRepository = outGoingStudentErasmusRepository;
        this.outGoingStudentExchangeRepository = outGoingStudentExchangeRepository;
        this.applicationExchangeRepository = applicationExchangeRepository;
        this.applicationErasmusMapper = applicationErasmusMapper;
        this.applicationExchangeMapper = applicationExchangeMapper;
    }

    public ApplicationErasmusDTO sendApplicationErasmus(ApplicationErasmusDTO applicationErasmusDTO) throws Exception {
        ApplicationErasmus applicationErasmus = applicationErasmusMapper.toEntity(applicationErasmusDTO);
        ApplicationErasmusDTO dto;
        OutGoingStudentErasmus student = outGoingStudentErasmusRepository
                .findById(applicationErasmusDTO.getStudentId())
                .orElseThrow(()->new Exception("Student not found with id " + applicationErasmusDTO.getStudentId()));
        if (student.getGpa() >= 2.5) {
            applicationErasmus.setStatus(Status.IN_PROCESS);
            applicationErasmus.setStudent(student);
            applicationErasmusRepository.save(applicationErasmus);
        }
        else {
            applicationErasmus.setStatus(Status.REJECTED);
        }
        dto = applicationErasmusMapper.toApplicationErasmusDTO(applicationErasmus);
        return dto;
    }

    public ApplicationExchangeDTO sendApplicationExchange(ApplicationExchangeDTO applicationExchangeDTO) throws Exception {
        ApplicationExchange applicationExchange = applicationExchangeMapper.toEntity(applicationExchangeDTO);
        ApplicationExchangeDTO dto;
        OutGoingStudentExchange student = outGoingStudentExchangeRepository
                .findById(applicationExchangeDTO.getStudentId())
                .orElseThrow(()->new Exception("Student not found with id " + applicationExchangeDTO.getStudentId()));
        if (student.getGpa() >= 3) {
            applicationExchange.setStatus(Status.IN_PROCESS);
            applicationExchange.setStudent(student);
            applicationExchangeRepository.save(applicationExchange);
        }
        else {
            applicationExchange.setStatus(Status.REJECTED);
        }
        dto = applicationExchangeMapper.toApplicationExchangeDTO(applicationExchange);
        return dto;
    }

    public List<Application> retrieveApplications(ApplicationPoolSelectionDTO applicationPoolSelectionDTO) {

        ApplicationPoolType poolType = applicationPoolSelectionDTO.getApplicationPoolType();
        List<Application> applications = null;
        Status status;
        switch (poolType) {

            // Case statements
            case APPLICATIONS_APPROVED:
                log.info("applications approved will be listed");
                status = Status.APPROVED;
                applications = getApplicationsByStatus(status);
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
                applications = getApplicationsByStatus(status);
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

    private List<Application> getApplicationsByStatus(Status status) {
        List<Application> applicationsList = new ArrayList<>(applicationErasmusRepository.findAllByStatus(status));
        applicationsList.addAll(applicationExchangeRepository.findAllByStatus(status));

        return applicationsList;
    }

    public List<ApplicationErasmus> rankErasmusApplications(){
        List<ApplicationErasmus> applications = new ArrayList<>(applicationErasmusRepository.findAllByStatus(Status.IN_PROCESS));
        for(ApplicationErasmus application : applications) {
            OutGoingStudentErasmus student = application.getStudent();
            double gpaPoint = (100.0/3)*(student.getGpa() - 2.5);
            double englishPoint = student.getEngLetterGrade101().getPoint() + student.getEngLetterGrade102().getPoint();
            double totalPoints = gpaPoint + englishPoint;
            student.setErasmusPoint(totalPoints);
        }
        Collections.sort(applications, Collections.reverseOrder());
        log.info(applications.toString());
        return applications;
    }
}
