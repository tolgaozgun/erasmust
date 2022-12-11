package com.bilkent.erasmus.mappers.InitialApplicationMappper;

import com.bilkent.erasmus.dtos.InitialApplicationDTO.ApplicationExchangeDTO;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.ApplicationExchange;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-12-07T13:19:38+0300",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 17.0.4.1 (Amazon.com Inc.)"
)
@Component
public class ApplicationExchangeMapperImpl implements ApplicationExchangeMapper {

    @Override
    public ApplicationExchangeDTO toApplicationExchangeDTO(ApplicationExchange applicationExchange) {
        if ( applicationExchange == null ) {
            return null;
        }

        ApplicationExchangeDTO applicationExchangeDTO = new ApplicationExchangeDTO();

        applicationExchangeDTO.setId( applicationExchange.getId() );
        applicationExchangeDTO.setAppliedSemester( applicationExchange.getAppliedSemester() );
        applicationExchangeDTO.setSignature( applicationExchange.getSignature() );
        applicationExchangeDTO.setSignAt( applicationExchange.getSignAt() );
        applicationExchangeDTO.setCoordinator( applicationExchange.getCoordinator() );

        return applicationExchangeDTO;
    }

    @Override
    public ApplicationExchange toEntity(ApplicationExchangeDTO applicationExchangeDTO) {
        if ( applicationExchangeDTO == null ) {
            return null;
        }

        ApplicationExchange applicationExchange = new ApplicationExchange();

        applicationExchange.setId( applicationExchangeDTO.getId() );
        applicationExchange.setAppliedSemester( applicationExchangeDTO.getAppliedSemester() );
        applicationExchange.setSignature( applicationExchangeDTO.getSignature() );
        applicationExchange.setSignAt( applicationExchangeDTO.getSignAt() );
        applicationExchange.setCoordinator( applicationExchangeDTO.getCoordinator() );

        return applicationExchange;
    }

    @Override
    public List<ApplicationExchangeDTO> toApplicationExchangeDTOList(List<ApplicationExchange> applicationExchangeList) {
        if ( applicationExchangeList == null ) {
            return null;
        }

        List<ApplicationExchangeDTO> list = new ArrayList<ApplicationExchangeDTO>( applicationExchangeList.size() );
        for ( ApplicationExchange applicationExchange : applicationExchangeList ) {
            list.add( toApplicationExchangeDTO( applicationExchange ) );
        }

        return list;
    }

    @Override
    public List<ApplicationExchange> toApplicationExchangeList(List<ApplicationExchangeDTO> applicationExchangeDTOList) {
        if ( applicationExchangeDTOList == null ) {
            return null;
        }

        List<ApplicationExchange> list = new ArrayList<ApplicationExchange>( applicationExchangeDTOList.size() );
        for ( ApplicationExchangeDTO applicationExchangeDTO : applicationExchangeDTOList ) {
            list.add( toEntity( applicationExchangeDTO ) );
        }

        return list;
    }
}
