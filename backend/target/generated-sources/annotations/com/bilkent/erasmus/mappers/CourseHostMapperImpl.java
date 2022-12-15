package com.bilkent.erasmus.mappers;

import com.bilkent.erasmus.dtos.CourseHostDTO;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-12-12T18:48:36+0300",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 17.0.4.1 (Amazon.com Inc.)"
)
@Component
public class CourseHostMapperImpl implements CourseHostMapper {

    @Override
    public CourseHostDTO toCourseHostDTO(CourseHost courseHost) {
        if ( courseHost == null ) {
            return null;
        }

        CourseHostDTO courseHostDTO = new CourseHostDTO();

        courseHostDTO.setId( courseHost.getId() );
        courseHostDTO.setName( courseHost.getName() );
        courseHostDTO.setCreditECTS( courseHost.getCreditECTS() );
        courseHostDTO.setCreditBilkent( courseHost.getCreditBilkent() );
        courseHostDTO.setIsProjectCourse( courseHost.getIsProjectCourse() );
        courseHostDTO.setIsNeedToBeMerged( courseHost.getIsNeedToBeMerged() );
        courseHostDTO.setIsApprovedPrev( courseHost.getIsApprovedPrev() );

        return courseHostDTO;
    }

    @Override
    public CourseHost toEntity(CourseHostDTO courseHostDTO) {
        if ( courseHostDTO == null ) {
            return null;
        }

        CourseHost courseHost = new CourseHost();

        courseHost.setId( courseHostDTO.getId() );
        courseHost.setName( courseHostDTO.getName() );
        courseHost.setCreditECTS( courseHostDTO.getCreditECTS() );
        courseHost.setCreditBilkent( courseHostDTO.getCreditBilkent() );
        courseHost.setIsProjectCourse( courseHostDTO.getIsProjectCourse() );
        courseHost.setIsNeedToBeMerged( courseHostDTO.getIsNeedToBeMerged() );
        courseHost.setIsApprovedPrev( courseHostDTO.getIsApprovedPrev() );

        return courseHost;
    }

    @Override
    public List<CourseHostDTO> toCourseHostDTOList(List<CourseHost> courseHostList) {
        if ( courseHostList == null ) {
            return null;
        }

        List<CourseHostDTO> list = new ArrayList<CourseHostDTO>( courseHostList.size() );
        for ( CourseHost courseHost : courseHostList ) {
            list.add( toCourseHostDTO( courseHost ) );
        }

        return list;
    }

    @Override
    public List<CourseHost> toCourseHostList(List<CourseHostDTO> courseHostDTOList) {
        if ( courseHostDTOList == null ) {
            return null;
        }

        List<CourseHost> list = new ArrayList<CourseHost>( courseHostDTOList.size() );
        for ( CourseHostDTO courseHostDTO : courseHostDTOList ) {
            list.add( toEntity( courseHostDTO ) );
        }

        return list;
    }
}
