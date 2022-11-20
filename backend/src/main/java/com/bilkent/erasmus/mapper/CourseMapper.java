package com.bilkent.erasmus.mapper;

import com.bilkent.erasmus.dto.CourseDTO;
import com.bilkent.erasmus.models.applicationModels.CourseModels.Course;
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
