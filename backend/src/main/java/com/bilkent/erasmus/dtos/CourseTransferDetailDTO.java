package com.bilkent.erasmus.dtos;

import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import lombok.Data;

@Data
public class CourseTransferDetailDTO {
    private CourseBilkent courseBilkent;
    private CourseHost courseHost;
    private double grade;
    private int id;
}
