package com.bilkent.erasmus.models.universityModels;

import com.bilkent.erasmus.models.enums.FacultyName;
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
