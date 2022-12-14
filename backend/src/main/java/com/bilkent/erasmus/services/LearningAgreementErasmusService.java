package com.bilkent.erasmus.services;

import com.bilkent.erasmus.dtos.InitialApplicationDTO.LearningAgreementDTO;
import com.bilkent.erasmus.enums.MobilityType;
import com.bilkent.erasmus.enums.SemesterOfferings;
import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.models.applicationModels.learningAgreementForms.LearningAgreementErasmus;
import com.bilkent.erasmus.models.compositeModels.MobilityDetail;
import com.bilkent.erasmus.repositories.applicationRepositories.LearningAgreementErasmusRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
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

    public List<LearningAgreementErasmus> retrieveAgreements(MobilityDetail mobility) {

        MobilityType type = mobility.getMobilityType();
        List<LearningAgreementErasmus> agreements = null;
        Status status;

        switch (type) {

            // Case statements
            case BEFORE:
                log.info("agreements before mobility will be listed");
                status = Status.IN_PROCESS;
                agreements = getAgreementsByStatus(status);
                break;
            case DURING:
                log.info("agreements during mobility will be listed");
                status = Status.IN_PROCESS;
                agreements = getAgreementsByStatus(status);
                break;
            case AFTER:
                log.info("agreements after mobility will be listed");
                status = Status.IN_PROCESS;
                agreements = getAgreementsByStatus(status);
                break;
            case DONE:
                log.info("done agreements will be listed");
                status = Status.APPROVED;
                agreements = getAgreementsByStatus(status);
                break;
        }
        return agreements;
    }

    private List<LearningAgreementErasmus> getAgreementsByStatus(Status status) {
        List<LearningAgreementErasmus> agreementList = null;
        //agreementList = new ArrayList<LearningAgreementErasmus>(LearningAgreementErasmusRepository.findAllByStatus(status));
        //agreementList.addAll(LearningAgreementErasmusRepository.findAllByStatus(status));

        return agreementList;
    }
}
