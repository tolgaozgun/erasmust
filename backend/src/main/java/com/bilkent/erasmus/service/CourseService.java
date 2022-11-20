package com.bilkent.erasmus.service;

import com.bilkent.erasmus.dto.CourseDTO;
import com.bilkent.erasmus.mapper.CourseMapper;
import com.bilkent.erasmus.models.applicationModels.CourseModels.Course;
import com.bilkent.erasmus.repository.applicationRepositories.CourseRepository;
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
