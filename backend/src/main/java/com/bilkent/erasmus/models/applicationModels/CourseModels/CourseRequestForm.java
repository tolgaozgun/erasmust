package com.bilkent.erasmus.models.applicationModels.CourseModels;

import com.bilkent.erasmus.models.applicationModels.UserModels.StudentModels.Student;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "courseRequestForm")
public class CourseRequestForm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int formId;

    @ManyToOne
    private Student student;

}
