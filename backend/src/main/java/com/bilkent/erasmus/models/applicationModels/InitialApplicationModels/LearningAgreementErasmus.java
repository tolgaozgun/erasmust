package com.bilkent.erasmus.models.applicationModels.InitialApplicationModels;

import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudentErasmus;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Data
@Entity
public class LearningAgreementErasmus extends LearningAgreement{

    @ManyToOne
    private OutGoingStudentErasmus student;
}
