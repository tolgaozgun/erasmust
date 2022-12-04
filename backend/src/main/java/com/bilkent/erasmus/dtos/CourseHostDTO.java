package com.bilkent.erasmus.dtos;

import com.bilkent.erasmus.models.universityModels.Department;
import lombok.Data;

import javax.persistence.ManyToOne;

@Data
public class CourseHostDTO {

    private int id;

    private String name;

    private Double creditECTS;

    private Double creditBilkent;

    private Boolean isProjectCourse;

    private Boolean isNeedToBeMerged;

    private Boolean isApprovedPrev;
}
