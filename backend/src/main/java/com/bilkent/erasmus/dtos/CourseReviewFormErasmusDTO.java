package com.bilkent.erasmus.dtos;

import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import com.bilkent.erasmus.models.userModels.AdministrativeModels.CourseCoordinator;
import lombok.Data;

@Data
public class CourseReviewFormErasmusDTO {

    private CourseCoordinator courseCoordinator;

    private CourseBilkent courseBilkent;

    private CourseHost courseHost;

    private String description;

    private String syllabusLink;
}
