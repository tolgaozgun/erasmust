package com.bilkent.erasmus.repositories.applicationRepositories;

import com.bilkent.erasmus.models.compositeModels.PreApprovalFormErasmusDetail;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PreApprovalFormErasmusDetailRepository extends JpaRepository <PreApprovalFormErasmusDetail, Integer> {

    // public static final String FIND_COURSE_REVIEW_FORMS = "SELECT projectId, projectName FROM projects";
    // @Query(value = FIND_COURSE_REVIEW_FORMS, nativeQuery = true)
    // public List<Object[]> findProjects();

    Page<PreApprovalFormErasmusDetail> findAll(@Nullable Specification productSpecification, Pageable pageable);
}
