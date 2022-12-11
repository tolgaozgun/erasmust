package com.bilkent.erasmus.repositories.applicationRepositories;

import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.PreApprovalForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Repository;

@Repository
public interface PreApprovalFormRepository
        extends JpaRepository<PreApprovalForm, Integer> {
    //
    Page<PreApprovalForm> findAll(@Nullable Specification productSpecification, Pageable pageable);
}
