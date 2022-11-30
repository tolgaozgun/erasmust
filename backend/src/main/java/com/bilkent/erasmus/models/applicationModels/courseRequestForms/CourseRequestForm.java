package com.bilkent.erasmus.models.applicationModels.courseRequestForms;

import com.bilkent.erasmus.models.userModels.StudentModels.Student;
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
