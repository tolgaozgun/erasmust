package com.bilkent.erasmus.services.preApprovalService;

import com.bilkent.erasmus.dtos.InitialApplicationDTO.PreApprovalFormDTO;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.PreApprovalForm;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.PreApprovalFormErasmus;
import com.bilkent.erasmus.models.compositeModels.PreApprovalFormErasmusDetail;
import com.bilkent.erasmus.repositories.PartnerUniversityErasmusRepository;
import com.bilkent.erasmus.repositories.applicationRepositories.PreApprovalFormErasmusDetailRepository;
import com.bilkent.erasmus.repositories.applicationRepositories.PreApprovalFormErasmusRepository;

public class PreApprovalFormErasmusService {

    private final PreApprovalFormErasmusRepository erasmusRepository;

    private final PreApprovalFormErasmusDetailRepository erasmusDetailRepository;

    private final PartnerUniversityErasmusRepository universityErasmusRepository;

    public PreApprovalFormErasmusService(PreApprovalFormErasmusRepository erasmusRepository, PreApprovalFormErasmusDetailRepository erasmusDetailRepository,
                                         PartnerUniversityErasmusRepository universityErasmusRepository) {
        this.erasmusRepository = erasmusRepository;
        this.erasmusDetailRepository = erasmusDetailRepository;
        this.universityErasmusRepository = universityErasmusRepository;
    }


    public PreApprovalFormDTO saveForm(PreApprovalFormDTO form) {

        PreApprovalFormErasmusDetail erasmusFormDetail = createMappingObject();
        PreApprovalFormErasmus erasmusForm = createEmptyPreApprovalForm();


        PreApprovalFormErasmus formErasmus = null;
        return null;
    }

    private PreApprovalFormErasmusDetail createMappingObject() {
        return new PreApprovalFormErasmusDetail();
    }

    private PreApprovalFormErasmus createEmptyPreApprovalForm() {
        return new PreApprovalFormErasmus();
    }

}
