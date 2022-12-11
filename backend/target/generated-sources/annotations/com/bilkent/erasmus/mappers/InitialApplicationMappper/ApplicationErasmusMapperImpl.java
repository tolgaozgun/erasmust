package com.bilkent.erasmus.mappers.InitialApplicationMappper;

import com.bilkent.erasmus.dtos.InitialApplicationDTO.ApplicationErasmusDTO;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.ApplicationErasmus;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-12-11T18:17:50+0300",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.7 (Amazon.com Inc.)"
)
@Component
public class ApplicationErasmusMapperImpl implements ApplicationErasmusMapper {

    @Override
    public ApplicationErasmusDTO toApplicationErasmusDTO(ApplicationErasmus applicationErasmus) {
        if ( applicationErasmus == null ) {
            return null;
        }

        ApplicationErasmusDTO applicationErasmusDTO = new ApplicationErasmusDTO();

        applicationErasmusDTO.setId( applicationErasmus.getId() );
        applicationErasmusDTO.setAppliedSemester( applicationErasmus.getAppliedSemester() );
        applicationErasmusDTO.setSignature( applicationErasmus.getSignature() );
        applicationErasmusDTO.setSignAt( applicationErasmus.getSignAt() );
        applicationErasmusDTO.setCoordinator( applicationErasmus.getCoordinator() );

        return applicationErasmusDTO;
    }

    @Override
    public ApplicationErasmus toEntity(ApplicationErasmusDTO applicationErasmusDTO) {
        if ( applicationErasmusDTO == null ) {
            return null;
        }

        ApplicationErasmus applicationErasmus = new ApplicationErasmus();

        applicationErasmus.setId( applicationErasmusDTO.getId() );
        applicationErasmus.setAppliedSemester( applicationErasmusDTO.getAppliedSemester() );
        applicationErasmus.setSignature( applicationErasmusDTO.getSignature() );
        applicationErasmus.setSignAt( applicationErasmusDTO.getSignAt() );
        applicationErasmus.setCoordinator( applicationErasmusDTO.getCoordinator() );

        return applicationErasmus;
    }

    @Override
    public List<ApplicationErasmusDTO> toApplicationErasmusDTOList(List<ApplicationErasmus> applicationErasmusList) {
        if ( applicationErasmusList == null ) {
            return null;
        }

        List<ApplicationErasmusDTO> list = new ArrayList<ApplicationErasmusDTO>( applicationErasmusList.size() );
        for ( ApplicationErasmus applicationErasmus : applicationErasmusList ) {
            list.add( toApplicationErasmusDTO( applicationErasmus ) );
        }

        return list;
    }

    @Override
    public List<ApplicationErasmus> toApplicationErasmusList(List<ApplicationErasmusDTO> applicationErasmusDTOList) {
        if ( applicationErasmusDTOList == null ) {
            return null;
        }

        List<ApplicationErasmus> list = new ArrayList<ApplicationErasmus>( applicationErasmusDTOList.size() );
        for ( ApplicationErasmusDTO applicationErasmusDTO : applicationErasmusDTOList ) {
            list.add( toEntity( applicationErasmusDTO ) );
        }

        return list;
    }
}
