package com.bilkent.erasmus.mappers.PreApprovalFormMapper;

import com.bilkent.erasmus.dtos.CourseBilkentDTO;
import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Named;

import java.util.List;
@Mapper(componentModel = "spring")
public interface CourseBilkentMapper {

    @Named("toCourseBilkentDTO")
    CourseBilkentDTO toCourseBilkentDTO(CourseBilkent  courseBilkent);

    @Named("toEntity")
    CourseBilkent toEntity(CourseBilkentDTO  courseBilkentDTO);

    @IterableMapping(qualifiedByName = "toCourseBilkentDTO")
    List<CourseBilkentDTO> toCourseBilkentDTOList(List<CourseBilkent>  courseBilkentList);

    @IterableMapping(qualifiedByName = "toEntity")
    List<CourseBilkent> toCourseBilkentList(List<CourseBilkentDTO>  courseBilkentDTOList);
}
