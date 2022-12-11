package com.bilkent.erasmus.dtos;

import com.bilkent.erasmus.models.enums.SemesterOfferings;
import com.bilkent.erasmus.models.enums.Status;
import com.bilkent.erasmus.models.universityModels.PartnerUniversityErasmus;
import com.bilkent.erasmus.models.universityModels.PartnerUniversityExchange;
import lombok.Data;

@Data
public class PreApprovalFormListDTO {

    private String academicYear;

    private SemesterOfferings semester;

    private Status status;

    private PartnerUniversityErasmus universityErasmus;

    private PartnerUniversityExchange universityExchange;

    private String type;
    // todo --> if user wants all forms call preapproval form repo
    // TODO --> else call specific pre approval form repository (erasmus or repository)

}
