package com.bilkent.erasmus.mappers;

import com.bilkent.erasmus.dtos.CourseReviewFormDTO;
import com.bilkent.erasmus.models.applicationModels.courseReviewForms.CourseReviewForm;
import org.mapstruct.Mapper;
import org.mapstruct.Named;

@Mapper(componentModel = "spring")
public interface CourseReviewFormMapper {

    @Named("toCourseDTO")
    CourseReviewFormDTO toCourseDTO(CourseReviewForm courseReviewForm);

    @Named("toEntity")
    CourseReviewForm toEntity(CourseReviewFormDTO courseReviewFormDTO);

}
