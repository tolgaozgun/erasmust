package com.bilkent.erasmus.services;

import com.bilkent.erasmus.models.applicationModels.courseRequestForms.CourseRequestForm;
import com.bilkent.erasmus.repositories.applicationRepositories.CourseRepositories.CourseRequestRepository;
import org.springframework.stereotype.Service;

@Service
public class CourseRequestService {

    private final CourseRequestRepository courseRequestRepository;

    public CourseRequestService(CourseRequestRepository courseRequestRepository) {
        this.courseRequestRepository = courseRequestRepository;
    }


    public CourseRequestForm sendCourseRequestForm(CourseRequestForm courseRequestForm) {
        return courseRequestRepository.save(courseRequestForm);
    }
}
