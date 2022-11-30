package com.bilkent.erasmus.models.applicationModels.InitialApplicationModels;

import com.bilkent.erasmus.models.applicationModels.courseReviewForms.CourseReviewForm;
import com.bilkent.erasmus.models.applicationModels.courseReviewForms.CourseReviewFormErasmus;
import com.bilkent.erasmus.models.userModels.AdministrativeModels.ExchangeCoordinator;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "preApprovalFormExchangeDetail")
public class PreApprovalFormExchangeDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    private CourseReviewFormErasmus courseForm;

    @ManyToOne
    private ExchangeCoordinator coordinator;

}
