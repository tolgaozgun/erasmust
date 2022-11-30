package com.bilkent.erasmus.repositories.applicationRepositories;

import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.PreApprovalFormErasmusDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PreApprovalFormErasmusDetailRepository extends JpaRepository <PreApprovalFormErasmusDetail, Integer> {
}
