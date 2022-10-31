package com.bilkent.erasmus.entity;

import com.bilkent.erasmus.enums.Department;
import lombok.Data;

import javax.persistence.*;

@Data
@Table
@Entity(name = "students")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String starsID;

    private String name;

    private String surname;

    private String email;

    @Enumerated(EnumType.STRING)
    private Department department;

    private Double gpa; // --> set null if non-student user is registered

    private String engLetterGrade; // ->> set null if non-student user is registered

    private Boolean status;

}
