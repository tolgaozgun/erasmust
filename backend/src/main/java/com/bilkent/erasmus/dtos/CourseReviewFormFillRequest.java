package com.bilkent.erasmus.dtos;

import lombok.Data;

@Data
public class CourseReviewFormFillRequest {

    private int bilkentCourseId;

    private int hostCourseId;

    private String description;
}
