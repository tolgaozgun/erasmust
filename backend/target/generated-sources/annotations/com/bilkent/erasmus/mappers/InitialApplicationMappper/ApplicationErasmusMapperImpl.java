package com.bilkent.erasmus.mappers.InitialApplicationMappper;

import com.bilkent.erasmus.dtos.InitialApplicationDTO.ApplicationErasmusDTO;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.ApplicationErasmus;
import com.bilkent.erasmus.models.universityModels.PartnerUniversityErasmus;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-12-12T23:52:06+0300",
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
        applicationErasmusDTO.setCoordinator( applicationErasmus.getCoordinator() );
        List<PartnerUniversityErasmus> list = applicationErasmus.getSchools();
        if ( list != null ) {
            applicationErasmusDTO.setSchools( new ArrayList<PartnerUniversityErasmus>( list ) );
        }

        return applicationErasmusDTO;
    }

    @Override
    public ApplicationErasmus toEntity(ApplicationErasmusDTO dto) {
        if ( dto == null ) {
            return null;
        }

        ApplicationErasmus applicationErasmus = new ApplicationErasmus();

        List<PartnerUniversityErasmus> list = dto.getSchools();
        if ( list != null ) {
            applicationErasmus.setSchools( new ArrayList<PartnerUniversityErasmus>( list ) );
        }
        applicationErasmus.setId( dto.getId() );
        applicationErasmus.setCoordinator( dto.getCoordinator() );

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
