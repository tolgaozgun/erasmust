package com.bilkent.erasmus.models.applicationModels.courseRequestForms;

import com.bilkent.erasmus.models.courseModels.Course;
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
