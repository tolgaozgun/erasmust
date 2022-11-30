package com.bilkent.erasmus.dto.UserDtos.StudentDtos;

import com.bilkent.erasmus.models.universityModels.PartnerUniversityErasmus;
import lombok.Data;

@Data
public class InComingStudentErasmusDTO {

    private PartnerUniversityErasmus partnerUniversity;
}
