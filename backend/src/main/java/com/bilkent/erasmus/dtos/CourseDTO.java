package com.bilkent.erasmus.dtos;

import com.bilkent.erasmus.models.universityModels.Department;
import lombok.Data;

@Data
public class CourseDTO {

    private int id;

    private String name;

    private String courseCode;

    private Double creditECTS;

    private Double creditBilkent;

    private Boolean isProjectCourse;

    private Department underDepartment;
}
