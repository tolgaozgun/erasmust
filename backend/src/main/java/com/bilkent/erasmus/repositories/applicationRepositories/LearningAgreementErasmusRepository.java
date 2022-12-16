package com.bilkent.erasmus.repositories.applicationRepositories;

import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.ApplicationErasmus;
import com.bilkent.erasmus.models.enums.MobilityType;
import com.bilkent.erasmus.models.enums.Status;
import com.bilkent.erasmus.models.applicationModels.learningAgreementForms.LearningAgreementErasmus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface LearningAgreementErasmusRepository extends JpaRepository<LearningAgreementErasmus, Integer> {

    List<LearningAgreementErasmus> findAllByCurrentMobility(MobilityType type);

    List<LearningAgreementErasmus> findAllByStatus(Status status);

    LearningAgreementErasmus findByStudent_Id(String id);
}
