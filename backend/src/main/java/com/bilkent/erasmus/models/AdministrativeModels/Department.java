package com.bilkent.erasmus.models.AdministrativeModels;

import com.bilkent.erasmus.enums.DepartmentName;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "departments")
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Enumerated(EnumType.STRING)
    private DepartmentName name;

    @ManyToOne
    private Faculty faculty;
}
