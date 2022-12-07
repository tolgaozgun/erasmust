package com.bilkent.erasmus.repositories.applicationRepositories;

import com.bilkent.erasmus.models.applicationModels.learningAgreementForms.LearningAgreementErasmus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LearningAgreementErasmusRepository extends JpaRepository<LearningAgreementErasmus, Integer> {
}
