package com.bilkent.erasmus.mappers;

import com.bilkent.erasmus.dtos.LearningAgreementErasmusDTO;
import com.bilkent.erasmus.models.applicationModels.learningAgreementForms.LearningAgreementErasmus;
import org.mapstruct.*;

import java.util.List;

@Mapper(componentModel = "spring")
public interface LearningAgreementErasmusMapper {

    @Named("toLearningAgreementErasmusDTO")
    LearningAgreementErasmusDTO toLearningAgreementErasmusDTO(LearningAgreementErasmus LearningAgreementErasmus);

    @Named("toEntity")
    LearningAgreementErasmus toEntity(LearningAgreementErasmusDTO dto);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updateLearningAgreementErasmusFromDTO(LearningAgreementErasmusDTO dto, @MappingTarget LearningAgreementErasmus LearningAgreementErasmus);

    @IterableMapping(qualifiedByName = "toLearningAgreementErasmusDTO")
    List<LearningAgreementErasmusDTO> toLearningAgreementErasmusDTOList(List<LearningAgreementErasmus> LearningAgreementErasmusList);


    @IterableMapping(qualifiedByName = "toEntity")
    List<LearningAgreementErasmus> toLearningAgreementErasmusList(List<LearningAgreementErasmusDTO> LearningAgreementErasmusDTOList);
}
