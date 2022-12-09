package com.bilkent.erasmus.services;

import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.mappers.InitialApplicationMappper.ApplicationErasmusMapper;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.ApplicationErasmus;
import com.bilkent.erasmus.models.universityModels.PartnerUniversityErasmus;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudentErasmus;
import com.bilkent.erasmus.repositories.PartnerUniversityErasmusRepository;
import com.bilkent.erasmus.repositories.applicationRepositories.ApplicationErasmusRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.servlet.http.Part;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;


@Service
@Slf4j
public class ApplicationErasmusService {

    private final ApplicationErasmusMapper applicationErasmusMapper;
    private final ApplicationErasmusRepository applicationErasmusRepository;
    private final PartnerUniversityErasmusRepository partnerUniversityErasmusRepository;

    public ApplicationErasmusService(ApplicationErasmusMapper applicationErasmusMapper, ApplicationErasmusRepository applicationErasmusRepository, PartnerUniversityErasmusRepository partnerUniversityErasmusRepository){
        this.applicationErasmusMapper = applicationErasmusMapper;
        this.applicationErasmusRepository = applicationErasmusRepository;
        this.partnerUniversityErasmusRepository = partnerUniversityErasmusRepository;
    }

    public void placeStudents() {
        List<ApplicationErasmus> applications = rankErasmusApplications();

        for (ApplicationErasmus application:applications) {
            System.out.println(application.getSchools());
            for (PartnerUniversityErasmus school : application.getSchools()) {
                if (school.getQuota() > 0)  {
                    application.setAssignedUniversity(school);
                    application.setStatus(Status.APPROVED);
                    applicationErasmusRepository.save(application);
                    school.setQuota(school.getQuota() - 1);
                    partnerUniversityErasmusRepository.save(school);
                    log.info("student" + application.getStudent().getId() + "is placed");
                    break;
                }
                log.info("trying the next school");
            }

            if (application.getAssignedUniversity() == null) {
                log.info("no schools matched" + application.getStudent().getId());
                application.setStatus(Status.IN_THE_WAITING_LIST);
                applicationErasmusRepository.save(application);
            }
        }
    }

    public void reevaluateApplications() {
        List<ApplicationErasmus> waitlist = applicationErasmusRepository.findAllByStatus(Status.IN_THE_WAITING_LIST);
        Collections.sort(waitlist);
        System.out.println(waitlist.size());
        System.out.println(partnerUniversityErasmusRepository.findAllByQuotaGreaterThan(-1));

        if (waitlist.size() > 0 && partnerUniversityErasmusRepository.findAllByQuotaGreaterThan(0).size() > 0) {
            for (PartnerUniversityErasmus school : partnerUniversityErasmusRepository.findAllByQuotaGreaterThan(0)) {
                log.info(school.getName());
                ApplicationErasmus application = waitlist.get(waitlist.size() - 1);
                log.info(application.getStudent().getFirstName());
                application.setAssignedUniversity(school);
                application.setStatus(Status.APPROVED);
                school.setQuota(school.getQuota() - 1);
                applicationErasmusRepository.save(application);
                partnerUniversityErasmusRepository.save(school);
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
