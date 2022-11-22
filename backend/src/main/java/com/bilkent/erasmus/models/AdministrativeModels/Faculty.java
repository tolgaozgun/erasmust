package com.bilkent.erasmus.models.AdministrativeModels;

import com.bilkent.erasmus.enums.FacultyName;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "faculties")
public class Faculty {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Enumerated(EnumType.STRING)
    private FacultyName name;

    //@OneToOne
   // private Chair chair;

}
