package com.bilkent.erasmus.mappers;

import com.bilkent.erasmus.dtos.CourseDTO;
import com.bilkent.erasmus.models.courseModels.Course;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-12-02T15:26:42+0300",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 17.0.4.1 (Amazon.com Inc.)"
)
@Component
public class CourseMapperImpl implements CourseMapper {

    @Override
    public CourseDTO toCourseDTO(Course course) {
        if ( course == null ) {
            return null;
        }

        CourseDTO courseDTO = new CourseDTO();

        courseDTO.setId( course.getId() );
        courseDTO.setName( course.getName() );
        courseDTO.setCreditECTS( course.getCreditECTS() );
        courseDTO.setCreditBilkent( course.getCreditBilkent() );
        courseDTO.setIsProjectCourse( course.getIsProjectCourse() );
        courseDTO.setUnderDepartment( course.getUnderDepartment() );

        return courseDTO;
    }

    @Override
    public Course toEntity(CourseDTO courseDTO) {
        if ( courseDTO == null ) {
            return null;
        }

        Course course = new Course();

        course.setId( courseDTO.getId() );
        course.setName( courseDTO.getName() );
        course.setCreditECTS( courseDTO.getCreditECTS() );
        course.setCreditBilkent( courseDTO.getCreditBilkent() );
        course.setIsProjectCourse( courseDTO.getIsProjectCourse() );
        course.setUnderDepartment( courseDTO.getUnderDepartment() );

        return course;
    }

    @Override
    public List<CourseDTO> toCourseDTOList(List<Course> courseList) {
        if ( courseList == null ) {
            return null;
        }

        List<CourseDTO> list = new ArrayList<CourseDTO>( courseList.size() );
        for ( Course course : courseList ) {
            list.add( toCourseDTO( course ) );
        }

        return list;
    }

    @Override
    public List<Course> toCourseList(List<CourseDTO> courseDTOList) {
        if ( courseDTOList == null ) {
            return null;
        }

        List<Course> list = new ArrayList<Course>( courseDTOList.size() );
        for ( CourseDTO courseDTO : courseDTOList ) {
            list.add( toEntity( courseDTO ) );
        }

        return list;
    }
}
