package com.bilkent.erasmus.dtos.UserDtos.StudentDtos;

import com.bilkent.erasmus.models.universityModels.PartnerUniversityExchange;
import lombok.Data;

@Data
public class InComingStudentExchangeDTO {

    private PartnerUniversityExchange partnerUniversity;
}
