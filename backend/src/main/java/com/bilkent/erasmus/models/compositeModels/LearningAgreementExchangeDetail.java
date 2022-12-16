package com.bilkent.erasmus.models.compositeModels;

import com.bilkent.erasmus.models.applicationModels.learningAgreementForms.LearningAgreementExchange;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "compositeLearningAgreementExchangeDetail")
public class LearningAgreementExchangeDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    private CoordinatorStudentExchange coordinatorStudent;

    @ManyToOne
    private LearningAgreementExchange learningAgreement;

}
