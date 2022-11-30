package com.bilkent.erasmus.mappers;

import com.bilkent.erasmus.dtos.CourseDTO;
import com.bilkent.erasmus.models.courseModels.Course;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Named;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CourseMapper {

    @Named("toCourseDTO")
    CourseDTO toCourseDTO(Course course);

    @Named("toEntity")
    Course toEntity(CourseDTO courseDTO);

    @IterableMapping(qualifiedByName = "toCourseDTO")
    List<CourseDTO> toCourseDTOList(List<Course> courseList);

    @IterableMapping(qualifiedByName = "toEntity")
    List<Course> toCourseList(List<CourseDTO> courseDTOList);

}
