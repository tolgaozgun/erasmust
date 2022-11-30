package com.bilkent.erasmus.mappers;

import com.bilkent.erasmus.dtos.CourseReviewFormDTO;
import com.bilkent.erasmus.models.applicationModels.courseReviewForms.CourseReviewForm;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-30T21:15:30+0300",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 17.0.4.1 (Amazon.com Inc.)"
)
@Component
public class CourseReviewFormMapperImpl implements CourseReviewFormMapper {

    @Override
    public CourseReviewFormDTO toCourseDTO(CourseReviewForm courseReviewForm) {
        if ( courseReviewForm == null ) {
            return null;
        }

        CourseReviewFormDTO courseReviewFormDTO = new CourseReviewFormDTO();

        courseReviewFormDTO.setCourseBilkent( courseReviewForm.getCourseBilkent() );
        courseReviewFormDTO.setCourseHost( courseReviewForm.getCourseHost() );
        courseReviewFormDTO.setDescription( courseReviewForm.getDescription() );
        courseReviewFormDTO.setSyllabusLink( courseReviewForm.getSyllabusLink() );

        return courseReviewFormDTO;
    }

    @Override
    public CourseReviewForm toEntity(CourseReviewFormDTO courseReviewFormDTO) {
        if ( courseReviewFormDTO == null ) {
            return null;
        }

        CourseReviewForm courseReviewForm = new CourseReviewForm();

        courseReviewForm.setCourseBilkent( courseReviewFormDTO.getCourseBilkent() );
        courseReviewForm.setCourseHost( courseReviewFormDTO.getCourseHost() );
        courseReviewForm.setDescription( courseReviewFormDTO.getDescription() );
        courseReviewForm.setSyllabusLink( courseReviewFormDTO.getSyllabusLink() );

        return courseReviewForm;
    }
}
