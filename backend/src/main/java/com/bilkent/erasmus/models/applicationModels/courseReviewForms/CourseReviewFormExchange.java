package com.bilkent.erasmus.models.applicationModels.courseReviewForms;

import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudentExchange;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Data
@Entity
public class CourseReviewFormExchange extends CourseReviewForm{

    @ManyToOne
    private OutGoingStudentExchange student;
}