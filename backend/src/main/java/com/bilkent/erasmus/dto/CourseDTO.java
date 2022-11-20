package com.bilkent.erasmus.dto;

import com.bilkent.erasmus.models.Department;
import lombok.Data;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Data
public class CourseDTO {

    private int id;

    private String name;

    private Double creditECTS;

    private Double creditBilkent;

    private Boolean isProjectCourse;

    private Department underDepartment;
}
