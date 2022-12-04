package com.bilkent.erasmus.mappers;

import com.bilkent.erasmus.dtos.CourseDTO;
import com.bilkent.erasmus.dtos.CourseHostDTO;
import com.bilkent.erasmus.models.courseModels.Course;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Named;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CourseHostMapper {

    @Named("toCourseHostDTO")
    CourseHostDTO toCourseHostDTO(CourseHost courseHost);

    @Named("toEntity")
    CourseHost toEntity(CourseHostDTO courseHostDTO);

    @IterableMapping(qualifiedByName = "toCourseHostDTO")
    List<CourseHostDTO> toCourseHostDTOList(List<CourseHost> courseHostList);

    @IterableMapping(qualifiedByName = "toEntity")
    List<CourseHost> toCourseHostList(List<CourseHostDTO> courseHostDTOList);
}
