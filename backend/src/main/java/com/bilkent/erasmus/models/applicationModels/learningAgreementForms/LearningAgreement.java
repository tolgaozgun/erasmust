package com.bilkent.erasmus.models.applicationModels.learningAgreementForms;

import com.bilkent.erasmus.embeddables.BilkentInformation;
import com.bilkent.erasmus.embeddables.ReceivingInstitutionInformation;
import com.bilkent.erasmus.enums.LanguageLevel;
import com.bilkent.erasmus.enums.SemesterOfferings;
import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.models.compositeModels.MobilityDetail;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "learningAgreements")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class LearningAgreement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String academicYear;

    private String studyCycle;

    private String subjectArea;

    @Enumerated(EnumType.STRING)
    private SemesterOfferings semester;

    @Enumerated(EnumType.STRING)
    private Status status;

    private BilkentInformation bilkentInformation;

    private ReceivingInstitutionInformation receivingInstitutionInformation;

    @OneToMany
    private List<MobilityDetail> mobilityDetailList;

    @Enumerated(EnumType.STRING)
    private LanguageLevel languageLevel;

    private String language;

}
