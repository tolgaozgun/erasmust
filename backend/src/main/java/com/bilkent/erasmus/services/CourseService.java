package com.bilkent.erasmus.services;

import com.bilkent.erasmus.dtos.CourseDTO;
import com.bilkent.erasmus.mappers.CourseMapper;
import com.bilkent.erasmus.models.courseModels.Course;
import com.bilkent.erasmus.repositories.applicationRepositories.CourseRepository;
import org.springframework.stereotype.Service;


@Service
public class CourseService {

    private final CourseRepository courseRepository;

    private final CourseMapper courseMapper;

    public CourseService(CourseRepository courseRepository, CourseMapper courseMapper) {
        this.courseRepository = courseRepository;
        this.courseMapper = courseMapper;
    }


    public CourseDTO addCourse(CourseDTO courseDTO) {
        Course course = courseMapper.toEntity(courseDTO);
        return courseMapper.toCourseDTO(courseRepository.save(course));
    }
}
