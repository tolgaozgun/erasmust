package com.bilkent.erasmus.mappers;

import com.bilkent.erasmus.dtos.InitialApplicationDTO.LearningAgreementDTO;
import com.bilkent.erasmus.models.applicationModels.learningAgreementForms.LearningAgreementErasmus;
import org.mapstruct.*;

import java.util.List;

@Mapper(componentModel = "spring")
public interface LearningAgreementEditMapper {

    @Named("toLearningAgreementDTO")
    LearningAgreementDTO toLearningAgreementDTO(LearningAgreementErasmus learningAgreementErasmus);

    // todo: ask
    //@Mapping(target = "mobilityDetailList", source = "dto.mobilityDetailList")
    @Named("toEntity")
    LearningAgreementErasmus toEntity(LearningAgreementDTO dto);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updateLearningAgreementFromDTO(LearningAgreementDTO dto, @MappingTarget LearningAgreementErasmus learningAgreementErasmus);

    @IterableMapping(qualifiedByName = "toLearningAgreementDTO")
    List<LearningAgreementDTO> toLearningAgreementDTOList(List<LearningAgreementErasmus> learningAgreementErasmusNewList);


    @IterableMapping(qualifiedByName = "toEntity")
    List<LearningAgreementErasmus> toLearningAgreementErasmusList(List<LearningAgreementDTO> learningAgreementDTOList);
}
