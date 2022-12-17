package com.bilkent.erasmus.mappers;

import com.bilkent.erasmus.dtos.PreApprovalFormEditDTO;
import com.bilkent.erasmus.mappers.PreApprovalFormMapper.CourseBilkentMapper;
import com.bilkent.erasmus.models.applicationModels.PreApprovalForms.PreApprovalFormNew;
import org.mapstruct.*;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PreApprovalFormEditMapper {

    @Named("toPreApprovalFormEditDTO")
    PreApprovalFormEditDTO toPreApprovalFormEditDTO(PreApprovalFormNew PreApprovalFormNew);

    @Mapping(target = "forms", source = "dto.forms")
    @Named("toEntity")
    PreApprovalFormNew toEntity(PreApprovalFormEditDTO dto);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updatePreApprovalFormNewFromDTO(PreApprovalFormEditDTO dto, @MappingTarget PreApprovalFormNew PreApprovalFormNew);

    @IterableMapping(qualifiedByName = "toPreApprovalFormEditDTO")
    List<PreApprovalFormEditDTO> toPreApprovalFormEditDTOList(List<PreApprovalFormNew> PreApprovalFormNewList);


    @IterableMapping(qualifiedByName = "toEntity")
    List<PreApprovalFormNew> toPreApprovalFormNewList(List<PreApprovalFormEditDTO> PreApprovalFormEditDTOList);
}
