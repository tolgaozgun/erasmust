package com.bilkent.erasmus.models.compositeModels;

import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.PreApprovalFormExchange;
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
    private CoordinatorStudentExchange coordinatorStudent;

    @ManyToOne
    private PreApprovalFormExchange preApprovalForm;

    @ManyToOne
    private CourseReviewForm reviewForm;
}
