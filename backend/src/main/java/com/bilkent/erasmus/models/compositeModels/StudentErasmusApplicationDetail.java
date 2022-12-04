package com.bilkent.erasmus.models.compositeModels;

import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.ApplicationErasmus;
import com.bilkent.erasmus.models.applicationModels.courseReviewForms.CourseReviewForm;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudentErasmus;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "StudentErasmusApplicationDetail")
public class StudentErasmusApplicationDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    private OutGoingStudentErasmus student;

    @ManyToOne
    private ApplicationErasmus reviewForm;
}