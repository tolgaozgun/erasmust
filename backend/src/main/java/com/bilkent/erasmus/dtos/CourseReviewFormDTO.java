package com.bilkent.erasmus.dtos;

import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import lombok.Data;

@Data
public class CourseReviewFormDTO {
    private String courseInstructor;
    private CourseBilkent courseBilkent;
    private CourseHost courseHost;
    private String description;
    private String syllabusLink;

}
