package com.bilkent.erasmus.models.applicationModels.learningAgreementForms;

import com.bilkent.erasmus.enums.MobilityType;
import com.bilkent.erasmus.enums.SemesterOfferings;
import com.bilkent.erasmus.enums.Status;
import lombok.Data;

import javax.persistence.*;

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

    private String grade;

    private String reasonForChange;

    private boolean isAdded;

    @Enumerated(EnumType.STRING)
    private SemesterOfferings semester;

    @Enumerated(EnumType.STRING)
    private Status status;

    @Enumerated(EnumType.STRING)
    private MobilityType currentMobility;
}