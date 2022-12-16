package com.bilkent.erasmus.models.applicationModels.learningAgreementForms;

import com.bilkent.erasmus.models.applicationModels.learningAgreementForms.LearningAgreement;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudent;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudentErasmus;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Data
@Entity
public class LearningAgreementErasmus extends LearningAgreement {

    @ManyToOne
    private OutGoingStudentErasmus student;
}
