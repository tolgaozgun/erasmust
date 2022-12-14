package com.bilkent.erasmus.services;

import com.bilkent.erasmus.dtos.InitialApplicationDTO.LearningAgreementDTO;
import com.bilkent.erasmus.enums.SemesterOfferings;
import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.models.applicationModels.learningAgreementForms.LearningAgreementExchange;
import com.bilkent.erasmus.repositories.applicationRepositories.LearningAgreementExchangeRepository;
import org.springframework.stereotype.Service;

@Service
public class LearningAgreementExchangeService {

    private final LearningAgreementExchangeRepository exchangeRepository;

    public LearningAgreementExchangeService(LearningAgreementExchangeRepository formExchangeRepository){
        this.exchangeRepository = formExchangeRepository;
    }

    /*private boolean notifyStudent(String studentName){

    }

    private boolean notifyCoordinator(String coordinatorName){

    }*/

    private boolean cancelAgreement(LearningAgreementExchange form){
        form.setStatus(Status.DECLINED_BY_STUDENT);
        return true;
    }

    private LearningAgreementExchange createEmptyLearningAgreement(String academicYear, SemesterOfferings semester) {
        LearningAgreementExchange form = new LearningAgreementExchange();
        form.setStatus(Status.IN_PROCESS);
        form.setAcademicYear(academicYear);
        form.setSemester(semester);
        return exchangeRepository.save(form);
    }

    public LearningAgreementExchange saveForm(LearningAgreementDTO form) throws Exception {
        LearningAgreementExchange exchangeForm = createEmptyLearningAgreement(form.getAcademicYear(), form.getSemester());
        return exchangeForm;
    }

}
