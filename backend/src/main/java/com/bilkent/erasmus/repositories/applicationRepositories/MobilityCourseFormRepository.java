package com.bilkent.erasmus.repositories.applicationRepositories;

import com.bilkent.erasmus.models.applicationModels.learningAgreementForms.MobilityCourseForm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MobilityCourseFormRepository extends JpaRepository<MobilityCourseForm, Integer> {
}
