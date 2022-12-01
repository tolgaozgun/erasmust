package com.bilkent.erasmus.mappers;

import com.bilkent.erasmus.dtos.CourseReviewFormDTO;
import com.bilkent.erasmus.dtos.CourseReviewFormErasmusDTO;
import com.bilkent.erasmus.dtos.CourseReviewFormExchangeDTO;
import com.bilkent.erasmus.models.applicationModels.courseReviewForms.CourseReviewForm;
import com.bilkent.erasmus.models.applicationModels.courseReviewForms.CourseReviewFormErasmus;
import com.bilkent.erasmus.models.applicationModels.courseReviewForms.CourseReviewFormExchange;
import org.mapstruct.Mapper;
import org.mapstruct.Named;

@Mapper(componentModel = "spring")
public interface CourseReviewFormMapper {

    @Named("toCourseReviewErasmusDTO")
    CourseReviewFormErasmusDTO toCourseReviewFormErasmusDTO(CourseReviewFormErasmus courseReviewForm);

    @Named("toEntity")
    CourseReviewFormErasmus toEntity(CourseReviewFormErasmusDTO courseReviewFormErasmusDTO);

    @Named("toCourseReviewExchangeDTO")
    CourseReviewFormExchangeDTO toCourseReviewFormExchangeDTO(CourseReviewFormExchange courseReviewForm);

    @Named("toEntity")
    CourseReviewFormExchange toEntity(CourseReviewFormExchangeDTO courseReviewFormExchangeDTO);

}
