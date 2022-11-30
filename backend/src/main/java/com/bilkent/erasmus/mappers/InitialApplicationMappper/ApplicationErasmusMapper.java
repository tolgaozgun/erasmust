package com.bilkent.erasmus.mappers.InitialApplicationMappper;

import com.bilkent.erasmus.dtos.InitialApplicationDTO.ApplicationErasmusDTO;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.ApplicationErasmus;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Named;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ApplicationErasmusMapper {

    @Named("toApplicationErasmusDTO")
    ApplicationErasmusDTO toApplicationErasmusDTO(ApplicationErasmus applicationErasmus);

    @Named("toEntity")
    ApplicationErasmus toEntity(ApplicationErasmusDTO applicationErasmusDTO);

    @IterableMapping(qualifiedByName = "toApplicationErasmusDTO")
    List<ApplicationErasmusDTO> toApplicationErasmusDTOList(List<ApplicationErasmus> applicationErasmusList);

    @IterableMapping(qualifiedByName = "toEntity")
    List<ApplicationErasmus> toApplicationErasmusList(List<ApplicationErasmusDTO> applicationErasmusDTOList);
}
