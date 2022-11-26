package com.bilkent.erasmus.mapper;

import com.bilkent.erasmus.dto.CourseReviewFormDTO;
import com.bilkent.erasmus.models.applicationModels.CourseReviewForm;
import org.mapstruct.Mapper;
import org.mapstruct.Named;

@Mapper(componentModel = "spring")
public interface CourseReviewFormMapper {

    @Named("toCourseDTO")
    CourseReviewFormDTO toCourseDTO(CourseReviewForm courseReviewForm);

    @Named("toEntity")
    CourseReviewForm toEntity(CourseReviewFormDTO courseReviewFormDTO);

}
