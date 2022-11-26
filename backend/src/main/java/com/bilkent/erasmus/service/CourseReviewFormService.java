package com.bilkent.erasmus.service;

import com.bilkent.erasmus.dto.CourseDTO;
import com.bilkent.erasmus.mapper.CourseMapper;
import com.bilkent.erasmus.mapper.CourseReviewFormMapper;
import com.bilkent.erasmus.models.applicationModels.CourseModels.Course;
import com.bilkent.erasmus.repository.applicationRepositories.CourseRepository;
import com.bilkent.erasmus.repository.applicationRepositories.CourseReviewFormRepository;
import org.springframework.stereotype.Service;

@Service
public class CourseReviewFormService {

    private final CourseReviewFormRepository courseReviewFormRepository;

    private final CourseReviewFormMapper courseReviewFormMapper;

    public CourseReviewFormService(CourseReviewFormRepository courseReviewFormRepository, CourseReviewFormMapper courseReviewFormMapper) {
        this.courseReviewFormRepository = courseReviewFormRepository;
        this.courseReviewFormMapper = courseReviewFormMapper;
    }

}
