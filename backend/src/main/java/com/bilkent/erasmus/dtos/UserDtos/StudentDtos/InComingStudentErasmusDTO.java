package com.bilkent.erasmus.dtos.UserDtos.StudentDtos;

import com.bilkent.erasmus.models.universityModels.PartnerUniversityErasmus;
import lombok.Data;

@Data
public class InComingStudentErasmusDTO {

    private PartnerUniversityErasmus partnerUniversity;
}
