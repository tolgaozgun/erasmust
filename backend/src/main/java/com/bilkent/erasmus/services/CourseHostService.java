package com.bilkent.erasmus.services;

import com.bilkent.erasmus.dtos.CourseHostDTO;
import com.bilkent.erasmus.mappers.CourseHostMapper;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import com.bilkent.erasmus.repositories.CourseHostRepository;
import lombok.Data;
import org.springframework.stereotype.Service;
@Data
@Service
public class CourseHostService {

    private final CourseHostRepository courseHostRepository;

    private final CourseHostMapper courseHostMapper;

    public CourseHostService(CourseHostRepository courseHostRepository, CourseHostMapper courseHostMapper) {
        this.courseHostRepository = courseHostRepository;
        this.courseHostMapper = courseHostMapper;
    }

    public CourseHostDTO createCourseHost(CourseHostDTO courseHostDTO) {
        CourseHost courseHost = courseHostMapper.toEntity(courseHostDTO);
        return(courseHostMapper.toCourseHostDTO(courseHostRepository.save(courseHost)));
    }

    public CourseHost save(CourseHost courseHost) {
        return courseHostRepository.save(courseHost);
    }
}
