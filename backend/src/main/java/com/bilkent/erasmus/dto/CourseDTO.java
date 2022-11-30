package com.bilkent.erasmus.dto;

import com.bilkent.erasmus.models.AdministrativeModels.Department;
import lombok.Data;

@Data
public class CourseDTO {

    private int id;

    private String name;

    private Double creditECTS;

    private Double creditBilkent;

    private Boolean isProjectCourse;

    private Department underDepartment;
}
