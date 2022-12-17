package com.bilkent.erasmus.repositories.applicationRepositories;

import com.bilkent.erasmus.models.compositeModels.LearningAgreementExchangeDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LearningAgreementExchangeDetailRepository extends JpaRepository<LearningAgreementExchangeDetail,Integer> {

    LearningAgreementExchangeDetail findById(int id);
}
