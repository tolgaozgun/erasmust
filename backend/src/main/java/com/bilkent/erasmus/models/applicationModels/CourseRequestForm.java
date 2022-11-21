package com.bilkent.erasmus.models.applicationModels;

import com.bilkent.erasmus.models.StudentModels.Student;
import com.bilkent.erasmus.models.applicationModels.CourseModels.Course;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

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
