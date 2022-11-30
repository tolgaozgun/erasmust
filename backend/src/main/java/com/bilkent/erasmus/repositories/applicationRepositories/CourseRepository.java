package com.bilkent.erasmus.repositories.applicationRepositories;

import com.bilkent.erasmus.models.courseModels.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Course, Integer> {
    Course findByName(String name);

}
