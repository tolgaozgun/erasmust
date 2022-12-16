package com.bilkent.erasmus.repositories.applicationRepositories;

import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.models.applicationModels.learningAgreementForms.LearningAgreementExchange;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LearningAgreementExchangeRepository extends JpaRepository<LearningAgreementExchange, Integer> {

    List<LearningAgreementExchange> findAllByStatus(Status status);
}
