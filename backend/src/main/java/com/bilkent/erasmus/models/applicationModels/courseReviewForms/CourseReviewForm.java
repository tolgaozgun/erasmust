package com.bilkent.erasmus.models.applicationModels.courseReviewForms;

import com.bilkent.erasmus.models.FileData;
import com.bilkent.erasmus.enums.CourseApprovalStatus;
import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import com.bilkent.erasmus.enums.SemesterOfferings;
import lombok.Data;

import javax.persistence.*;


@Data
@Entity
@Table(name = "courseReviewForms")
@Inheritance(strategy = InheritanceType.JOINED)
public class CourseReviewForm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    private CourseBilkent courseBilkent;

    @ManyToOne
    private CourseHost courseHost;

    @Embedded
    private FileData file;

    @Enumerated(EnumType.STRING)
    private CourseApprovalStatus status;

    private String description;

    private String coordinatorReply;

    private String academicYear;

    @Enumerated(EnumType.STRING)
    private SemesterOfferings semester;

}
