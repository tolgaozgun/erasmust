package com.bilkent.erasmus.repositories.applicationRepositories;

import com.bilkent.erasmus.models.compositeModels.PreApprovalFormExchangeDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PreApprovalFormExchangeDetailRepository extends JpaRepository<PreApprovalFormExchangeDetail, Integer> {
    PreApprovalFormExchangeDetail findById(int id);
}
