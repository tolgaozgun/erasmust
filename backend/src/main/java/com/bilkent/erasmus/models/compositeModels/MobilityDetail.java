package com.bilkent.erasmus.models.compositeModels;

import com.bilkent.erasmus.enums.MobilityType;
import com.bilkent.erasmus.models.applicationModels.learningAgreementForms.MobilityCourseForm;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@Entity
public class MobilityDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private long startDate;

    private long endDate;

    @Enumerated(EnumType.STRING)
    private MobilityType mobilityType;

    @OneToMany
    private List<MobilityCourseForm> mobilityCourseForms;

}