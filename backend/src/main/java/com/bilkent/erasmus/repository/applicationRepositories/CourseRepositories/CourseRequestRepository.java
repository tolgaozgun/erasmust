package com.bilkent.erasmus.repository.applicationRepositories.CourseRepositories;

import com.bilkent.erasmus.models.applicationModels.CourseModels.CourseRequestForm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRequestRepository extends JpaRepository<CourseRequestForm, Integer> {

    CourseRequestForm findByStudent_Id(int id);
}
