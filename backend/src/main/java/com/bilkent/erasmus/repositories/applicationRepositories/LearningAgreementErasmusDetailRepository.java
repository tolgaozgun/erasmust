package com.bilkent.erasmus.repositories.applicationRepositories;

import com.bilkent.erasmus.models.compositeModels.LearningAgreementErasmusDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LearningAgreementErasmusDetailRepository extends JpaRepository<LearningAgreementErasmusDetail, Integer> {

    LearningAgreementErasmusDetail findById(int id);
}
