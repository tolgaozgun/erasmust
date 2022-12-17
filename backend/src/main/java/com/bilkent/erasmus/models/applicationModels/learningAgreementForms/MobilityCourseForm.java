package com.bilkent.erasmus.models.applicationModels.learningAgreementForms;

import com.bilkent.erasmus.enums.LetterGrade;
import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class MobilityCourseForm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    private CourseBilkent courseBilkent;

    @ManyToOne
    private CourseHost courseHost;

    private boolean isChanged;

    private boolean wasCompleted;

    @Enumerated(EnumType.STRING)
    private LetterGrade grade;

    private String reasonOfChange;
}