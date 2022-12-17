package com.bilkent.erasmus.dtos;

import com.bilkent.erasmus.models.universityModels.Department;
import com.bilkent.erasmus.models.userModels.AdministrativeModels.CourseCoordinator;
import lombok.Data;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Data
public class CourseBilkentDTO {

    private int id;

    private String name;

    private Double creditECTS;

    private Double creditBilkent;

    private Boolean isProjectCourse;

    private Department underDepartment;

    private CourseCoordinator courseCoordinator;

    private String requirements;

}
