package com.bilkent.erasmus.models.compositeModels;

import com.bilkent.erasmus.enums.LetterGrade;
import com.bilkent.erasmus.enums.MobilityType;
import com.bilkent.erasmus.models.applicationModels.learningAgreementForms.MobilityCourseForm;
import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import com.bilkent.erasmus.models.courseModels.CourseHost;
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

    private Date startDate;

    private Date endDate;
    @Enumerated(EnumType.STRING)
    private MobilityType mobilityType;

    @OneToMany
    private List<MobilityCourseForm> mobilityCourseBilkent;

    @OneToMany
    private List<MobilityCourseForm> mobilityCourseHost;

    public MobilityType getMobilityType() {
        return mobilityType;
    }
}
