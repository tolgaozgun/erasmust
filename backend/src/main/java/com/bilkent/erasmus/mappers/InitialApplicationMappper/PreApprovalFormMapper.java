package com.bilkent.erasmus.mappers.InitialApplicationMappper;

import com.bilkent.erasmus.dtos.InitialApplicationDTO.ApplicationErasmusDTO;
import com.bilkent.erasmus.dtos.InitialApplicationDTO.PreApprovalFormDTO;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.ApplicationErasmus;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.PreApprovalForm;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Named;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PreApprovalFormMapper {

    @Named("toPreApprovalFormDTO")
    PreApprovalFormDTO toPreApprovalFormDTO(PreApprovalForm form);

    @Named("toEntity")
    PreApprovalForm toEntity(PreApprovalFormDTO form);

    @IterableMapping(qualifiedByName = "toPreApprovalFormDTO")
    List<PreApprovalFormDTO> toPreApprovalFormDTOList(List<PreApprovalForm> formList);

    @IterableMapping(qualifiedByName = "toEntity")
    List<PreApprovalForm> toEntityList(List<PreApprovalFormDTO> formList);


}
