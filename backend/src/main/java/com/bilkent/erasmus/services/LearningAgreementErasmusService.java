package com.bilkent.erasmus.services;

import com.bilkent.erasmus.dtos.InitialApplicationDTO.LearningAgreementDTO;
import com.bilkent.erasmus.enums.SemesterOfferings;
import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.models.applicationModels.learningAgreementForms.LearningAgreementErasmus;
import com.bilkent.erasmus.repositories.applicationRepositories.LearningAgreementErasmusRepository;
import org.springframework.stereotype.Service;

@Service
public class LearningAgreementErasmusService {

    private final LearningAgreementErasmusRepository erasmusRepository;

    private LearningAgreementErasmusService(LearningAgreementErasmusRepository formErasmusRepository){
        this.erasmusRepository = formErasmusRepository;
    }

    /*private boolean notifyStudent(String studentName){

    }

    private boolean notifyCoordinator(String coordinatorName){

    }*/

    private boolean cancelAgreement(LearningAgreementErasmus form){
        form.setStatus(Status.DECLINED_BY_STUDENT);
        return true;
    }

    public LearningAgreementErasmus createEmptyLearningAgreement(String academicYear, SemesterOfferings semester) {
        LearningAgreementErasmus form = new LearningAgreementErasmus();
        form.setStatus(Status.IN_PROCESS);
        form.setAcademicYear(academicYear);
        form.setSemester(semester);
        return erasmusRepository.save(form);
    }

    public LearningAgreementErasmus saveForm(LearningAgreementDTO form) throws Exception {
        LearningAgreementErasmus erasmusForm = createEmptyLearningAgreement(form.getAcademicYear(), form.getSemester());
        return erasmusForm;
    }
}
