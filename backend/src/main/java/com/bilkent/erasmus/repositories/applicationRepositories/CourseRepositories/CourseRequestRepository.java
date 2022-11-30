package com.bilkent.erasmus.repositories.applicationRepositories.CourseRepositories;

import com.bilkent.erasmus.models.applicationModels.courseRequestForms.CourseRequestForm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRequestRepository extends JpaRepository<CourseRequestForm, Integer> {

    CourseRequestForm findByStudent_Id(int id);
}
