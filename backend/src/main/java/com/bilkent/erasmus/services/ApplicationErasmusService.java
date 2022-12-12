package com.bilkent.erasmus.services;


import com.bilkent.erasmus.mappers.InitialApplicationMappper.ApplicationErasmusMapper;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.ApplicationErasmus;
import com.bilkent.erasmus.models.enums.Status;
import com.bilkent.erasmus.models.universityModels.PartnerUniversityErasmus;
import com.bilkent.erasmus.models.userModels.AdministrativeModels.ExchangeCoordinator;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudentErasmus;
import com.bilkent.erasmus.repositories.ExchangeCoordinatorRepository;
import com.bilkent.erasmus.repositories.PartnerUniversityErasmusRepository;
import com.bilkent.erasmus.repositories.applicationRepositories.ApplicationErasmusRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.*;


@Service
@Slf4j
public class ApplicationErasmusService {

    private final ApplicationErasmusMapper applicationErasmusMapper;
    private final ApplicationErasmusRepository applicationErasmusRepository;
    private final PartnerUniversityErasmusRepository partnerUniversityErasmusRepository;
    private final ExchangeCoordinatorRepository exchangeCoordinatorRepository;

    public ApplicationErasmusService(ApplicationErasmusMapper applicationErasmusMapper, ApplicationErasmusRepository applicationErasmusRepository, PartnerUniversityErasmusRepository partnerUniversityErasmusRepository, ExchangeCoordinatorRepository exchangeCoordinatorRepository){
        this.applicationErasmusMapper = applicationErasmusMapper;
        this.applicationErasmusRepository = applicationErasmusRepository;
        this.partnerUniversityErasmusRepository = partnerUniversityErasmusRepository;
        this.exchangeCoordinatorRepository = exchangeCoordinatorRepository;
    }

    public void placeStudents() {
        List<ApplicationErasmus> applications = rankErasmusApplications();
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
        List<ApplicationErasmus> waitlist = applicationErasmusRepository.findAllByStatus(Status.IN_THE_WAITING_LIST);
        Collections.sort(waitlist);

        if (waitlist.size() > 0 && partnerUniversityErasmusRepository.findAllByQuotaGreaterThan(0).size() > 0) {
            for (PartnerUniversityErasmus school : partnerUniversityErasmusRepository.findAllByQuotaGreaterThan(0)) {
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
    private List<ApplicationErasmus> rankErasmusApplications(){
        List<ApplicationErasmus> applications = new ArrayList<>(applicationErasmusRepository.findAllByStatus(Status.IN_PROCESS));
        for(ApplicationErasmus application : applications) {
            OutGoingStudentErasmus student = application.getStudent();
            double gpaPoint = (100.0/3)*(student.getGpa() - 2.5);
            double englishPoint = student.getEngLetterGrade101().getPoint() + student.getEngLetterGrade102().getPoint();
            double totalPoints = gpaPoint + englishPoint;
            student.setErasmusPoint(totalPoints);
        }
        Collections.sort(applications, Collections.reverseOrder());
        return applications;
    }


}
