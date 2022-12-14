package com.bilkent.erasmus.mappers.InitialApplicationMappper;

import com.bilkent.erasmus.dtos.InitialApplicationDTO.ApplicationErasmusDTO;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.ApplicationErasmus;
import org.mapstruct.*;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ApplicationErasmusMapper {

    @Named("toApplicationErasmusDTO")
    ApplicationErasmusDTO toApplicationErasmusDTO(ApplicationErasmus applicationErasmus);

    @Mapping(target = "schools", source = "dto.schools")
    @Named("toEntity")
    ApplicationErasmus toEntity(ApplicationErasmusDTO dto);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updateApplicationErasmusFromDTO(ApplicationErasmusDTO dto, @MappingTarget ApplicationErasmus applicationErasmus);

    @IterableMapping(qualifiedByName = "toApplicationErasmusDTO")
    List<ApplicationErasmusDTO> toApplicationErasmusDTOList(List<ApplicationErasmus> applicationErasmusList);



    @IterableMapping(qualifiedByName = "toEntity")
    List<ApplicationErasmus> toApplicationErasmusList(List<ApplicationErasmusDTO> applicationErasmusDTOList);
}
