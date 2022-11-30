package com.bilkent.erasmus.models.applicationModels.CourseModels;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "courseRequestFormDetail")
public class CourseRequestFormDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    private Course course;

    @ManyToOne
    private CourseRequestForm courseRequestForm;
}
