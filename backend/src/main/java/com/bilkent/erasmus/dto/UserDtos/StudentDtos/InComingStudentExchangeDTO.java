package com.bilkent.erasmus.dto.UserDtos.StudentDtos;

import com.bilkent.erasmus.models.universityModels.PartnerUniversityExchange;
import lombok.Data;

@Data
public class InComingStudentExchangeDTO {

    private PartnerUniversityExchange partnerUniversity;
}
