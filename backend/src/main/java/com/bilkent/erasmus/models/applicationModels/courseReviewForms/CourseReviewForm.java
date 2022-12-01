package com.bilkent.erasmus.models.applicationModels.courseReviewForms;

import com.bilkent.erasmus.enums.CourseApprovalStatus;
import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import lombok.Data;

import javax.persistence.*;


@Data
@Entity
@Table(name = "courseReviewForm")
@Inheritance(strategy = InheritanceType.JOINED)
public class CourseReviewForm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String courseCoordinator; //ToDo change to foreign key to courseCoordinator

    @ManyToOne
    private CourseBilkent courseBilkent;

    @ManyToOne
    private CourseHost courseHost;

    @Enumerated(EnumType.STRING)
    private CourseApprovalStatus status;

    private String description;
    private String syllabusLink;
}
