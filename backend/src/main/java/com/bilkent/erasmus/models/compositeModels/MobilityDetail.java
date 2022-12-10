package com.bilkent.erasmus.models.compositeModels;

import com.bilkent.erasmus.enums.MobilityType;
import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import com.bilkent.erasmus.models.applicationModels.learningAgreementForms.Mobility;

import javax.persistence.Enumerated;
import javax.persistence.ManyToOne;

public class MobilityDetail {

    @Enumerated
    private MobilityType mobilityType;

    @ManyToOne
    private CourseBilkent courseBilkent;

    @ManyToOne
    private CourseHost courseHost;
}
