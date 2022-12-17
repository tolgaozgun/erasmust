
package com.bilkent.erasmus.models.applicationModels.learningAgreementForms;

import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudentExchange;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Data
@Entity
public class LearningAgreementExchange extends LearningAgreement {

    @ManyToOne
    private OutGoingStudentExchange student;
}
