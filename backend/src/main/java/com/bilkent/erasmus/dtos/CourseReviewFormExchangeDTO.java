package com.bilkent.erasmus.dtos;

import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import lombok.Data;

@Data
public class CourseReviewFormExchangeDTO {

    private String courseCoordinator;

    private CourseBilkent courseBilkent;

    private CourseHost courseHost;

    private String description;

    private String syllabusLink;
}
