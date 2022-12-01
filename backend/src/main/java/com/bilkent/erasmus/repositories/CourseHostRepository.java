package com.bilkent.erasmus.repositories;

import com.bilkent.erasmus.models.courseModels.CourseHost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface CourseHostRepository extends JpaRepository<CourseHost, Integer> {
}
