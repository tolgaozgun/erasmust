package com.bilkent.erasmus.mappers;

import com.bilkent.erasmus.dtos.CourseReviewFormErasmusDTO;
import com.bilkent.erasmus.dtos.CourseReviewFormExchangeDTO;
import com.bilkent.erasmus.models.applicationModels.courseReviewForms.CourseReviewFormErasmus;
import com.bilkent.erasmus.models.applicationModels.courseReviewForms.CourseReviewFormExchange;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-12-01T17:26:35+0300",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 17.0.4.1 (Amazon.com Inc.)"
)
@Component
public class CourseReviewFormMapperImpl implements CourseReviewFormMapper {

    @Override
    public CourseReviewFormErasmusDTO toCourseReviewFormErasmusDTO(CourseReviewFormErasmus courseReviewForm) {
        if ( courseReviewForm == null ) {
            return null;
        }

        CourseReviewFormErasmusDTO courseReviewFormErasmusDTO = new CourseReviewFormErasmusDTO();

        courseReviewFormErasmusDTO.setCourseCoordinator( courseReviewForm.getCourseCoordinator() );
        courseReviewFormErasmusDTO.setCourseBilkent( courseReviewForm.getCourseBilkent() );
        courseReviewFormErasmusDTO.setCourseHost( courseReviewForm.getCourseHost() );
        courseReviewFormErasmusDTO.setDescription( courseReviewForm.getDescription() );
        courseReviewFormErasmusDTO.setSyllabusLink( courseReviewForm.getSyllabusLink() );

        return courseReviewFormErasmusDTO;
    }

    @Override
    public CourseReviewFormErasmus toEntity(CourseReviewFormErasmusDTO courseReviewFormErasmusDTO) {
        if ( courseReviewFormErasmusDTO == null ) {
            return null;
        }

        CourseReviewFormErasmus courseReviewFormErasmus = new CourseReviewFormErasmus();

        courseReviewFormErasmus.setCourseCoordinator( courseReviewFormErasmusDTO.getCourseCoordinator() );
        courseReviewFormErasmus.setCourseBilkent( courseReviewFormErasmusDTO.getCourseBilkent() );
        courseReviewFormErasmus.setCourseHost( courseReviewFormErasmusDTO.getCourseHost() );
        courseReviewFormErasmus.setDescription( courseReviewFormErasmusDTO.getDescription() );
        courseReviewFormErasmus.setSyllabusLink( courseReviewFormErasmusDTO.getSyllabusLink() );

        return courseReviewFormErasmus;
    }

    @Override
    public CourseReviewFormExchangeDTO toCourseReviewFormExchangeDTO(CourseReviewFormExchange courseReviewForm) {
        if ( courseReviewForm == null ) {
            return null;
        }

        CourseReviewFormExchangeDTO courseReviewFormExchangeDTO = new CourseReviewFormExchangeDTO();

        courseReviewFormExchangeDTO.setCourseCoordinator( courseReviewForm.getCourseCoordinator() );
        courseReviewFormExchangeDTO.setCourseBilkent( courseReviewForm.getCourseBilkent() );
        courseReviewFormExchangeDTO.setCourseHost( courseReviewForm.getCourseHost() );
        courseReviewFormExchangeDTO.setDescription( courseReviewForm.getDescription() );
        courseReviewFormExchangeDTO.setSyllabusLink( courseReviewForm.getSyllabusLink() );

        return courseReviewFormExchangeDTO;
    }

    @Override
    public CourseReviewFormExchange toEntity(CourseReviewFormExchangeDTO courseReviewFormExchangeDTO) {
        if ( courseReviewFormExchangeDTO == null ) {
            return null;
        }

        CourseReviewFormExchange courseReviewFormExchange = new CourseReviewFormExchange();

        courseReviewFormExchange.setCourseCoordinator( courseReviewFormExchangeDTO.getCourseCoordinator() );
        courseReviewFormExchange.setCourseBilkent( courseReviewFormExchangeDTO.getCourseBilkent() );
        courseReviewFormExchange.setCourseHost( courseReviewFormExchangeDTO.getCourseHost() );
        courseReviewFormExchange.setDescription( courseReviewFormExchangeDTO.getDescription() );
        courseReviewFormExchange.setSyllabusLink( courseReviewFormExchangeDTO.getSyllabusLink() );

        return courseReviewFormExchange;
    }
}
