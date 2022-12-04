package com.bilkent.erasmus.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CourseReviewFormFillRequest {

    private int bilkentCourseId;

    private int hostCourseId;

    private String description;
}
