package com.bilkent.erasmus.repository.applicationRepositories.CourseRepositories;

import com.bilkent.erasmus.models.applicationModels.CourseModels.Course;
import com.bilkent.erasmus.models.applicationModels.CourseRequestFormDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRequestFormDetailRepository extends JpaRepository<CourseRequestFormDetail, Integer> {

    CourseRequestFormDetail findByCourse_Name(String name);
}
