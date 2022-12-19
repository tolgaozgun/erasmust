package com.bilkent.erasmus.repositories.applicationRepositories;

import com.bilkent.erasmus.enums.MobilityType;
import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.models.applicationModels.learningAgreementForms.LearningAgreementErasmus;
import com.bilkent.erasmus.models.compositeModels.MobilityDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LearningAgreementErasmusRepository extends JpaRepository<LearningAgreementErasmus, Integer> {

    //List<LearningAgreementErasmus> findByMobilityDetail(MobilityDetail mobilityDetail);

    //List<LearningAgreementErasmus> findAllByStatus(Status status);

    Optional<LearningAgreementErasmus> findByStudent_Id(String id);

    List<LearningAgreementErasmus> findAllByStudent_StarsId(String id);

    Optional<LearningAgreementErasmus> findById(int id);
}
