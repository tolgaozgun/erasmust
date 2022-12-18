package com.bilkent.erasmus.dtos;

import com.bilkent.erasmus.embeddables.BilkentInformation;
import com.bilkent.erasmus.embeddables.ReceivingInstitutionInformation;
import com.bilkent.erasmus.enums.LanguageLevel;
import com.bilkent.erasmus.enums.SemesterOfferings;
import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.models.compositeModels.MobilityDetail;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudent;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LearningAgreementErasmusDTO {

    private OutGoingStudent student;

    private int id;

    private String academicYear;

    private String studyCycle;

    private String subjectArea;

    private SemesterOfferings semester;

    private Status status;

    private BilkentInformation bilkentInformation;

    private ReceivingInstitutionInformation receivingInstitutionInformation;

    private List<MobilityDetail> mobilityDetailList;

    private LanguageLevel languageLevel;

    private String language;

}
