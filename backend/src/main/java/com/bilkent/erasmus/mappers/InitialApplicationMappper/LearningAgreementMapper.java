package com.bilkent.erasmus.mappers.InitialApplicationMappper;

import com.bilkent.erasmus.dtos.InitialApplicationDTO.LearningAgreementDTO;
import com.bilkent.erasmus.models.applicationModels.learningAgreementForms.LearningAgreement;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Named;

import java.util.List;

@Mapper(componentModel = "spring")
public interface LearningAgreementMapper {

    @Named("toPreApprovalFormDTO")
    LearningAgreementDTO toLearningAgreementDTO(LearningAgreement form);

    @Named("toEntity")
    LearningAgreement toEntity(LearningAgreementDTO form);

    @IterableMapping(qualifiedByName = "toLearningAgreementDTO")
    List<LearningAgreementDTO> toLearningAgreementDTOList(List<LearningAgreement> formList);

    @IterableMapping(qualifiedByName = "toEntity")
    List<LearningAgreement> toEntityList(List<LearningAgreementDTO> formList);
}