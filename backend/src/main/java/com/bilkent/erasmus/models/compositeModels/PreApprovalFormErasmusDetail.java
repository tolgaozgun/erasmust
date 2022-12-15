package com.bilkent.erasmus.models.compositeModels;

import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.PreApprovalFormErasmus;
import com.bilkent.erasmus.models.applicationModels.courseReviewForms.CourseReviewForm;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "compositePreApprovalFormErasmusDetail")
public class PreApprovalFormErasmusDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne(cascade = CascadeType.PERSIST)
    private CoordinatorStudentErasmus coordinatorStudent;

    @ManyToOne(cascade = CascadeType.PERSIST)
    private PreApprovalFormErasmus preApprovalForm;

    @ManyToOne(cascade = CascadeType.PERSIST)
    private CourseReviewForm reviewForm;

}
