package com.bilkent.erasmus.dtos.InitialApplicationDTO;

import com.bilkent.erasmus.embeddables.BilkentInformation;
import com.bilkent.erasmus.embeddables.ReceivingInstitutionInformation;
import com.bilkent.erasmus.enums.LanguageLevel;
import com.bilkent.erasmus.enums.SemesterOfferings;
import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.models.compositeModels.MobilityDetail;
import lombok.Data;

import java.util.List;

@Data
public class LearningAgreementDTO {


    private int id;

    private String studentId;

    private String academicYear;

    private String studyCycle;

    private String subjectArea;

    private SemesterOfferings semester;

    private BilkentInformation bilkentInformation;

    private ReceivingInstitutionInformation receivingInstitutionInformation;

    private Status status;

    private List<MobilityDetail> mobilityDetailList;

    private LanguageLevel languageLevel;

    private String language;
}