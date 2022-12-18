package com.bilkent.erasmus.mappers;

import com.bilkent.erasmus.dtos.CourseTransferDTO;
import com.bilkent.erasmus.dtos.CourseTransferDetailDTO;
import com.bilkent.erasmus.dtos.PreApprovalFormEditDTO;
import com.bilkent.erasmus.models.applicationModels.CourseTransferForm;
import com.bilkent.erasmus.models.applicationModels.CourseTransferFormDetailItem;
import com.bilkent.erasmus.models.applicationModels.PreApprovalForms.PreApprovalFormNew;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring")
public interface CourseTransferFormEditMapper {

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updateFromDTO(CourseTransferDTO dto, @MappingTarget CourseTransferForm courseTransferForm);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updateDetailFromDTO(CourseTransferDetailDTO dto, @MappingTarget CourseTransferFormDetailItem courseTransferFormDetailItem);
}
