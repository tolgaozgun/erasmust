package com.bilkent.erasmus.repositories.PreApprovalFormRepositories;

import com.bilkent.erasmus.models.applicationModels.PreApprovalForms.CourseReviewFormNew;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseReviewFormRepositoryNew extends JpaRepository<CourseReviewFormNew, Integer> {
}
