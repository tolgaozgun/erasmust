package com.bilkent.erasmus.dtos.InitialApplicationDTO;

import com.bilkent.erasmus.embeddables.BilkentInformation;
import com.bilkent.erasmus.embeddables.ReceivingInstitutionInformation;
import com.bilkent.erasmus.enums.MobilityType;
import com.bilkent.erasmus.enums.SemesterOfferings;
import com.bilkent.erasmus.enums.Status;
import lombok.Data;

@Data
public class LearningAgreementDTO {

    private String academicYear;

    private String studyCycle;

    private String subjectArea;

    private SemesterOfferings semester;

    private BilkentInformation bilkentInformation;

    private ReceivingInstitutionInformation receivingInstitutionInformation;

    private Status status;

    private MobilityType currentMobility;

}
