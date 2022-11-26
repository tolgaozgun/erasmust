package com.bilkent.erasmus.models.applicationModels;

import com.bilkent.erasmus.models.StudentModels.OutGoingStudentErasmus;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "courseBilkent")
public class CourseReviewFormErasmus extends CourseReviewForm{

    @ManyToOne
    private OutGoingStudentErasmus student;
}
