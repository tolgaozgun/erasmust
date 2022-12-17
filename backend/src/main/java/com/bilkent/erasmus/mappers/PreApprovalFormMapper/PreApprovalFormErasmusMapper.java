package com.bilkent.erasmus.mappers.PreApprovalFormMapper;

import com.bilkent.erasmus.dtos.PreApprovalFormDtos.PreApprovalFormDTONew;
import com.bilkent.erasmus.models.applicationModels.PreApprovalForms.PreApprovalFormNew;
import org.mapstruct.*;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PreApprovalFormErasmusMapper {

    @Named("toPreApprovalFormDTONew")
    PreApprovalFormDTONew toPreApprovalFormDTONew(PreApprovalFormNew PreApprovalFormNew);

    @Mapping(target = "forms", source = "dto.forms")
    @Named("toEntity")
    PreApprovalFormNew toEntity(PreApprovalFormDTONew dto);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updatePreApprovalFormNewFromDTO(PreApprovalFormDTONew dto, @MappingTarget PreApprovalFormNew PreApprovalFormNew);

    @IterableMapping(qualifiedByName = "toPreApprovalFormDTONew")
    List<PreApprovalFormDTONew> toPreApprovalFormDTONewList(List<PreApprovalFormNew> PreApprovalFormNewList);


    @IterableMapping(qualifiedByName = "toEntity")
    List<PreApprovalFormNew> toPreApprovalFormNewList(List<PreApprovalFormDTONew> PreApprovalFormDTONewList);
}
