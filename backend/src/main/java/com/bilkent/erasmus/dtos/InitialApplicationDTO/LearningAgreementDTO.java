package com.bilkent.erasmus.dtos.InitialApplicationDTO;

import com.bilkent.erasmus.embeddables.BilkentInformation;
import com.bilkent.erasmus.embeddables.ReceivingInstitutionInformation;
import com.bilkent.erasmus.enums.LanguageLevel;
import com.bilkent.erasmus.enums.MobilityType;
import com.bilkent.erasmus.enums.SemesterOfferings;
import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.models.compositeModels.MobilityDetail;
import lombok.Data;

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

    private MobilityDetail mobilityDetail;

    private LanguageLevel languageLevel;

    private String language;
}
