package com.bilkent.erasmus.services;

import com.bilkent.erasmus.dtos.CourseHostDTO;
import com.bilkent.erasmus.mappers.CourseHostMapper;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import com.bilkent.erasmus.repositories.CourseHostRepository;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.List;

@Data
@Service
public class CourseHostService {

    private final CourseHostRepository courseHostRepository;

    private final CourseHostMapper courseHostMapper;

    public CourseHostService(CourseHostRepository courseHostRepository, CourseHostMapper courseHostMapper) {
        this.courseHostRepository = courseHostRepository;
        this.courseHostMapper = courseHostMapper;
    }

    public CourseHost findById(int id) {
        return courseHostRepository.findById(id).orElse(null);
    }

    public CourseHost save(CourseHost courseHost) {
        return courseHostRepository.save(courseHost);
    }

    public List<CourseHost> getAllPreviouslyApproved() {
        return courseHostRepository.findAllByIsApprovedPrevIsTrue(true);
    }
}
