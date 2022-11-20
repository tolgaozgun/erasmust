package com.bilkent.erasmus.models.StudentModels;

import com.bilkent.erasmus.enums.DepartmentName;
import com.bilkent.erasmus.models.User;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@Table(name = "baseStudent")
@Inheritance(strategy = InheritanceType.JOINED)
public class Student extends User {

    @Enumerated(EnumType.STRING)
    private DepartmentName departmentName;

    private String degree;

    private double gpa;

    private String gender;
}
