package com.bilkent.erasmus.service;

import com.bilkent.erasmus.dto.CourseRequestDTO;
import com.bilkent.erasmus.models.applicationModels.UserModels.StudentModels.Student;
import com.bilkent.erasmus.models.applicationModels.CourseModels.Course;
import com.bilkent.erasmus.models.applicationModels.CourseModels.CourseRequestForm;
import com.bilkent.erasmus.models.applicationModels.CourseModels.CourseRequestFormDetail;
import com.bilkent.erasmus.repository.studentRepository.StudentRepository;
import com.bilkent.erasmus.repository.applicationRepositories.CourseRepositories.CourseRequestFormDetailRepository;
import com.bilkent.erasmus.repository.applicationRepositories.CourseRepositories.CourseRequestRepository;
import com.bilkent.erasmus.repository.applicationRepositories.CourseRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CourseRequestFormDetailService {

    private final CourseRequestFormDetailRepository courseRequestFormDetailRepository;

    private final CourseRepository courseRepository;

    private final StudentRepository studentRepository;

    private final CourseRequestRepository courseRequestRepository;

    public CourseRequestFormDetailService(CourseRequestFormDetailRepository courseRequestFormDetailRepository, CourseRepository courseRepository, StudentRepository studentRepository, CourseRequestRepository courseRequestRepository) {
        this.courseRequestFormDetailRepository = courseRequestFormDetailRepository;
        this.courseRepository = courseRepository;
        this.studentRepository = studentRepository;
        this.courseRequestRepository = courseRequestRepository;
    }


    public boolean sendForm(CourseRequestDTO courseRequestDTO) {
        List<Course> addedCourses = new ArrayList<>();
        CourseRequestForm courseRequestForm = createRequestForm(courseRequestDTO.getOwnerId());
        for (int i = 0; i < courseRequestDTO.getCourseNames().size(); i++) {
            addedCourses.add(
                    courseRepository
                            .findByName(
                                    courseRequestDTO
                                            .getCourseNames()
                                            .get(i))
                            );
        }
        Student student = studentRepository.findById(courseRequestDTO.getOwnerId());
        for (int i = 0; i < addedCourses.size(); i++) {
            System.out.println(addedCourses.get(1).getName());
            CourseRequestFormDetail courseRequestFormDetail = new CourseRequestFormDetail();
            courseRequestFormDetail.setCourse(addedCourses.get(i));
            courseRequestFormDetail.setCourseRequestForm(courseRequestForm);
            courseRequestFormDetailRepository.save(courseRequestFormDetail);
        }
        return true;
    }

    private CourseRequestForm createRequestForm(int id) {
        CourseRequestForm courseRequestForm = new CourseRequestForm();
        courseRequestForm.setStudent(studentRepository.findById(id));
        return courseRequestRepository.save(courseRequestForm);
        //return (studentRepository.findById(id) != null);
    }
}
