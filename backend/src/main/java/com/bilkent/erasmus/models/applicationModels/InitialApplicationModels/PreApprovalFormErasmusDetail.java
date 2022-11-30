package com.bilkent.erasmus.models.applicationModels.InitialApplicationModels;

import com.bilkent.erasmus.models.applicationModels.courseReviewForms.CourseReviewForm;
import com.bilkent.erasmus.models.userModels.AdministrativeModels.ExchangeCoordinator;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "preApprovalFormErasmusDetail")
public class PreApprovalFormErasmusDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    private CourseReviewForm courseForm;

    @ManyToOne
    private ExchangeCoordinator coordinator;
}

