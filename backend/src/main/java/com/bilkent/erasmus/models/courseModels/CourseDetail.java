package com.bilkent.erasmus.models.courseModels;

import com.bilkent.erasmus.models.universityModels.Department;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "courseDetail")
public class CourseDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    private Course baseCourse;

    @ManyToOne
    private Department mandatoryForDepartments;

    @ManyToOne
    private Department electiveForDepartments;

    @ManyToOne
    private Course preRequisites;

}


   /* @OneToOne
    private Course baseCourse;

    @OneToMany
    private List<Department> mandatoryForDepartments;

    @OneToMany
    private List<Department> electiveForDepartments;

    @OneToMany
    private List<Course> preRequisites;*/

