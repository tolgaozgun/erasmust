package com.bilkent.erasmus.services;

import com.bilkent.erasmus.mappers.CourseReviewFormMapper;
import com.bilkent.erasmus.repositories.applicationRepositories.CourseReviewFormRepository;
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
