package com.bilkent.erasmus.models.compositeModels;

import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.PreApprovalFormErasmus;
import com.bilkent.erasmus.models.applicationModels.courseReviewForms.CourseReviewForm;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "compositePreApprovalFormExchangeDetail")
public class PreApprovalFormExchangeDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    private CoordinatorStudentErasmus coordinatorStudent;

    @ManyToOne
    private PreApprovalFormErasmus preApprovalForm;

    @ManyToOne
    private CourseReviewForm reviewForm;
}
