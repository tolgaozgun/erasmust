package com.bilkent.erasmus.models.applicationModels.learningAgreementForms;

import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudent;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Data
@Entity
public class LearningAgreementErasmus extends LearningAgreement {

    @ManyToOne
    private OutGoingStudent student;

    public OutGoingStudent getsStudent(){
        return student;
    }
}
