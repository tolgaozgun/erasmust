package com.bilkent.erasmus.mappers.InitialApplicationMappper;
import com.bilkent.erasmus.dtos.InitialApplicationDTO.ApplicationExchangeDTO;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.ApplicationExchange;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Named;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ApplicationExchangeMapper {
    @Named("toApplicationExchangeDTO")
    ApplicationExchangeDTO toApplicationExchangeDTO(ApplicationExchange applicationExchange);

    @Named("toEntity")
    ApplicationExchange toEntity(ApplicationExchangeDTO applicationExchangeDTO);

    @IterableMapping(qualifiedByName = "toApplicationExchangeDTO")
    List<ApplicationExchangeDTO> toApplicationExchangeDTOList(List<ApplicationExchange> applicationExchangeList);

    @IterableMapping(qualifiedByName = "toEntity")
    List<ApplicationExchange> toApplicationExchangeList(List<ApplicationExchangeDTO> applicationExchangeDTOList);
}
