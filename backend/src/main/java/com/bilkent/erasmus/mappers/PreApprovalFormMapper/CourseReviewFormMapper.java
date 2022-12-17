package com.bilkent.erasmus.mappers.PreApprovalFormMapper;

import com.bilkent.erasmus.dtos.CourseReviewFormNewDTO;
import com.bilkent.erasmus.models.applicationModels.PreApprovalForms.CourseReviewFormNew;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Named;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CourseReviewFormMapper {


    @Named("toCourseReviewFormNewDTO")
    CourseReviewFormNewDTO toCourseReviewFormNewDTO(CourseReviewFormNew courseReviewFormNew);

    @Named("toEntity")
    CourseReviewFormNew toEntity(CourseReviewFormNewDTO courseReviewFormNewDTO);

    @IterableMapping(qualifiedByName = "toCourseReviewFormNewDTO")
    List<CourseReviewFormNewDTO> toCourseReviewFormNewDTOList(List<CourseReviewFormNew> courseReviewFormNewList);

    @IterableMapping(qualifiedByName = "toEntity")
    List<CourseReviewFormNew> toCourseReviewFormNewList(List<CourseReviewFormNewDTO> courseReviewFormNewDTOList);
}
