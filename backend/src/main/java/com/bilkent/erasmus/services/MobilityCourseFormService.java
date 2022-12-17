package com.bilkent.erasmus.services;

import com.bilkent.erasmus.models.applicationModels.learningAgreementForms.MobilityCourseForm;
import com.bilkent.erasmus.repositories.applicationRepositories.MobilityCourseFormRepository;
import lombok.Data;
import org.springframework.stereotype.Service;

@Data
@Service
public class MobilityCourseFormService {
    private final MobilityCourseFormRepository mobilityCourseFormRepository;


    public MobilityCourseFormService(MobilityCourseFormRepository mobilityCourseFormRepository) {
        this.mobilityCourseFormRepository = mobilityCourseFormRepository;
    }


    public MobilityCourseForm save(MobilityCourseForm mobilityCourseForm) {
        return mobilityCourseFormRepository.save(mobilityCourseForm);
    }
}
