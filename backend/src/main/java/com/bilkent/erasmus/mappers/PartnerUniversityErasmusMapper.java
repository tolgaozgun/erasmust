package com.bilkent.erasmus.mappers;

import com.bilkent.erasmus.dtos.CourseDTO;
import com.bilkent.erasmus.dtos.CourseHostDTO;
import com.bilkent.erasmus.dtos.PartnerUniversityErasmusDTO;
import com.bilkent.erasmus.models.courseModels.Course;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import com.bilkent.erasmus.models.universityModels.PartnerUniversityErasmus;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Named;

import java.util.List;
@Mapper(componentModel = "spring")

public interface PartnerUniversityErasmusMapper {
    @Named("toErasmusUniversityDTO")
    PartnerUniversityErasmusDTO toErasmusUniversityDTO(PartnerUniversityErasmus partnerUniversityErasmus);
    @IterableMapping(qualifiedByName = "toErasmusUniversityDTO")
    List<PartnerUniversityErasmusDTO> toErasmusUniversityListDTO(List<PartnerUniversityErasmus> universityErasmusList);
}
