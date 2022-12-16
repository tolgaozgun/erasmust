package com.bilkent.erasmus.models.compositeModels;

import com.bilkent.erasmus.models.applicationModels.courseReviewForms.CourseReviewForm;
import com.bilkent.erasmus.models.applicationModels.learningAgreementForms.LearningAgreementErasmus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "compositeLearningAgreementErasmusDetail")
public class LearningAgreementErasmusDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    private CoordinatorStudentErasmus coordinatorStudent;

    @ManyToOne
    private LearningAgreementErasmus learningAgreement;

}
