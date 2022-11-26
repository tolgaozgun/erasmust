package com.bilkent.erasmus.repository.applicationRepositories;

import com.bilkent.erasmus.models.applicationModels.CourseReviewForm;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseReviewFormRepository extends JpaRepository<CourseReviewForm, Integer> {

}
