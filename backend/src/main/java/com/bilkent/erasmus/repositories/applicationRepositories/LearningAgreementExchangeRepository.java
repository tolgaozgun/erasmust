package com.bilkent.erasmus.repositories.applicationRepositories;

import com.bilkent.erasmus.models.applicationModels.learningAgreementForms.LearningAgreementExchange;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LearningAgreementExchangeRepository extends JpaRepository<LearningAgreementExchange, Integer> {
}
