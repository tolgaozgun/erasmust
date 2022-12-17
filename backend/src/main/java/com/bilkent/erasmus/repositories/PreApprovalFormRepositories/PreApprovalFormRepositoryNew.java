package com.bilkent.erasmus.repositories.PreApprovalFormRepositories;

import com.bilkent.erasmus.models.applicationModels.PreApprovalForms.PreApprovalFormNew;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PreApprovalFormRepositoryNew extends JpaRepository<PreApprovalFormNew, Integer> {
}
