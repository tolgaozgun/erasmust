package com.bilkent.erasmus.dto;

import com.bilkent.erasmus.models.applicationModels.CourseModels.CourseBilkent;
import com.bilkent.erasmus.models.applicationModels.CourseModels.CourseHost;
import lombok.Data;

@Data
public class CourseReviewFormDTO {
    private String courseInstructor;
    private CourseBilkent courseBilkent;
    private CourseHost courseHost;
    private String description;
    private String syllabusLink;

}
