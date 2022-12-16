package com.bilkent.erasmus.services;


import com.bilkent.erasmus.dtos.InitialApplicationDTO.ApplicationErasmusDTO;
import com.bilkent.erasmus.mappers.InitialApplicationMappper.ApplicationErasmusMapper;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.ApplicationErasmus;
import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.models.universityModels.PartnerUniversityErasmus;
import com.bilkent.erasmus.models.userModels.AdministrativeModels.ExchangeCoordinator;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudent;
import com.bilkent.erasmus.repositories.ExchangeCoordinatorRepository;
import com.bilkent.erasmus.repositories.PartnerUniversityErasmusRepository;
import com.bilkent.erasmus.repositories.applicationRepositories.ApplicationErasmusRepository;
import com.bilkent.erasmus.repositories.studentRepository.OutGoingStudentErasmusRepository;
import com.bilkent.erasmus.repositories.studentRepository.OutGoingStudentRepository;
import com.bilkent.erasmus.repositories.studentRepository.StudentRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.*;


@Service
@Slf4j
public class ApplicationErasmusService {

    private final ApplicationErasmusMapper applicationErasmusMapper;
    private final ApplicationErasmusRepository applicationErasmusRepository;
    private final PartnerUniversityErasmusRepository partnerUniversityErasmusRepository;
    private final ExchangeCoordinatorRepository exchangeCoordinatorRepository;
    private final OutGoingStudentRepository outGoingStudentRepository;

    public ApplicationErasmusService(ApplicationErasmusMapper applicationErasmusMapper, ApplicationErasmusRepository applicationErasmusRepository, PartnerUniversityErasmusRepository partnerUniversityErasmusRepository, ExchangeCoordinatorRepository exchangeCoordinatorRepository, StudentRepository studentRepository, OutGoingStudentErasmusRepository outGoingStudentErasmusRepository, OutGoingStudentRepository outGoingStudentRepository){
        this.applicationErasmusMapper = applicationErasmusMapper;
        this.applicationErasmusRepository = applicationErasmusRepository;
        this.partnerUniversityErasmusRepository = partnerUniversityErasmusRepository;
        this.exchangeCoordinatorRepository = exchangeCoordinatorRepository;
        this.outGoingStudentRepository = outGoingStudentRepository;
    }

    public ApplicationErasmusDTO createErasmusApplication(ApplicationErasmusDTO applicationErasmusDTO) {
        ApplicationErasmus applicationErasmus = applicationErasmusMapper.toEntity(applicationErasmusDTO);
        ApplicationErasmusDTO dto;
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        OutGoingStudent student = outGoingStudentRepository.findByStarsId(auth.getName());
        if (student.getGpa() >= 2.5 && (student.getSemester().ordinal() >=2 && student.getSemester().ordinal() <= 4)) {
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

    public ApplicationErasmusDTO editErasmusApplication(ApplicationErasmusDTO applicationErasmusDTO) throws Exception {
        ApplicationErasmus applicationErasmus = applicationErasmusRepository.findById(applicationErasmusDTO.getId())
                .orElseThrow(()-> new Exception("Application with ID " + applicationErasmusDTO.getId() + "does not exist"));
        if (applicationErasmus != null && applicationErasmus.getStatus().equals(Status.IN_PROCESS)) {
            applicationErasmusMapper.updateApplicationErasmusFromDTO(applicationErasmusDTO, applicationErasmus);
            log.info(applicationErasmusRepository.save(applicationErasmus).toString());

        }
        return applicationErasmusMapper.toApplicationErasmusDTO(applicationErasmus);
    }

    public boolean cancelErasmusApplication() throws Exception {
        String starsId = SecurityContextHolder.getContext().getAuthentication().getName();
        try {
            ApplicationErasmus applicationErasmus = applicationErasmusRepository.findByStudent_StarsId(starsId)
                    .orElseThrow(EntityNotFoundException::new);
            if (!(applicationErasmus.getStatus().equals(Status.CANCELLED))) {
                applicationErasmus.setStatus(Status.CANCELLED);
                applicationErasmusRepository.save(applicationErasmus);
                log.info("Erasmus application cancelled");
            }
            else {
                log.info("Erasmus application is already cancelled");
            }
            return true;
        }catch (EntityNotFoundException e){
            log.info(e.toString());
            log.info(("Student doesn't have an Erasmus application"));
            return false;
        }
    }
    public void placeStudents() {
        List<ApplicationErasmus> applications = applicationErasmusRepository.findAllByStatusOrderByStudent_ErasmusPointDesc(Status.IN_PROCESS);
        calculateErasmusPoints();

        for (ApplicationErasmus application:applications) {
            for (PartnerUniversityErasmus school : application.getSchools()) {
                if (school.getQuota() > 0)  {
                    application.setAssignedUniversity(school);
                    application.setStatus(Status.APPROVED);
                    ExchangeCoordinator responsibleCoordinator = exchangeCoordinatorRepository.findFirstByDepartmentNameOrderByWorkLoadAsc(
                            application.getStudent().getDepartmentName());
                    application.setCoordinator(responsibleCoordinator);
                    applicationErasmusRepository.save(application);
                    school.setQuota(school.getQuota() - 1);
                    partnerUniversityErasmusRepository.save(school);
                    responsibleCoordinator.setWorkLoad(responsibleCoordinator.getWorkLoad() + 1);
                    exchangeCoordinatorRepository.save(responsibleCoordinator);
                    break;
                }
            }
            if (application.getAssignedUniversity() == null) {
                application.setStatus(Status.IN_THE_WAITING_LIST);
                applicationErasmusRepository.save(application);
            }
        }
    }

    public void reevaluateApplications() {
        List<ApplicationErasmus> waitlist = applicationErasmusRepository.findAllByStatusOrderByStudent_ErasmusPointAsc(Status.IN_THE_WAITING_LIST);

        List<PartnerUniversityErasmus> schoolsWithQuota = partnerUniversityErasmusRepository.findAllByQuotaGreaterThan(0);
        if (waitlist.size() > 0 && schoolsWithQuota.size() > 0) {
            for (PartnerUniversityErasmus school : schoolsWithQuota) {
                ApplicationErasmus application = waitlist.get(waitlist.size() - 1);
                application.setAssignedUniversity(school);
                application.setStatus(Status.APPROVED);
                ExchangeCoordinator responsibleCoordinator = exchangeCoordinatorRepository.findFirstByDepartmentNameOrderByWorkLoadAsc(
                        application.getStudent().getDepartmentName());
                application.setCoordinator(responsibleCoordinator);
                responsibleCoordinator.setWorkLoad(responsibleCoordinator.getWorkLoad() + 1);
                school.setQuota(school.getQuota() - 1);
                applicationErasmusRepository.save(application);
                partnerUniversityErasmusRepository.save(school);
                exchangeCoordinatorRepository.save(responsibleCoordinator);
                waitlist.remove(application);
            }
        }
    }
    private void calculateErasmusPoints(){
        List<ApplicationErasmus> applications = new ArrayList<>(applicationErasmusRepository.findAllByStatus(Status.IN_PROCESS));
        List<OutGoingStudent> students = new ArrayList<>();
        for(ApplicationErasmus application : applications) {
            OutGoingStudent student = application.getStudent();
            double gpaPoint = (100.0/3)*(student.getGpa() - 2.5);
            double englishPoint = student.getEngLetterGrade101().getPoint() + student.getEngLetterGrade102().getPoint();
            double totalPoints = gpaPoint + englishPoint;
            student.setErasmusPoint(totalPoints);
            students.add(student);
        }
        outGoingStudentRepository.saveAll(students);
    }

    public ApplicationErasmusDTO viewApplication() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        try {
            ApplicationErasmus application = applicationErasmusRepository.findByStudent_StarsId(auth.getName())
                    .orElseThrow(EntityNotFoundException::new);
            return applicationErasmusMapper.toApplicationErasmusDTO(application);

        }catch(EntityNotFoundException e) {
            log.info("Student doesn't have an Erasmus application");
            return null;
        }
    }

    public List<ApplicationErasmusDTO> viewAllApplications() {
        return applicationErasmusMapper.toApplicationErasmusDTOList(applicationErasmusRepository.findAll());
    }
}
