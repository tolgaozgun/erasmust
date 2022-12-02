package com.bilkent.erasmus.repositories.applicationRepositories;

import com.bilkent.erasmus.models.compositeModels.PreApprovalFormErasmusDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PreApprovalFormErasmusDetailRepository extends JpaRepository <PreApprovalFormErasmusDetail, Integer> {

    // public static final String FIND_COURSE_REVIEW_FORMS = "SELECT projectId, projectName FROM projects";
    // @Query(value = FIND_COURSE_REVIEW_FORMS, nativeQuery = true)
    // public List<Object[]> findProjects();
}
