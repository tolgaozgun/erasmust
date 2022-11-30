package com.bilkent.erasmus.repositories.applicationRepositories.CourseRepositories;

import com.bilkent.erasmus.models.applicationModels.courseRequestForms.CourseRequestFormDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRequestFormDetailRepository extends JpaRepository<CourseRequestFormDetail, Integer> {

    CourseRequestFormDetail findByCourse_Name(String name);
}
