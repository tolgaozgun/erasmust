package com.bilkent.erasmus.models.userModels.StudentModels;

import com.bilkent.erasmus.enums.DepartmentName;
import com.bilkent.erasmus.enums.CurriculumSemester;
import com.bilkent.erasmus.models.userModels.User;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "studentsAll")
@Inheritance(strategy = InheritanceType.JOINED)
public class Student extends User {

    @Enumerated(EnumType.STRING)
    private DepartmentName departmentName;

    private String degree;

    private double gpa;

    private String gender;

    @Enumerated(EnumType.STRING)
    private CurriculumSemester semester;
}
