package com.bilkent.erasmus.dtos.InitialApplicationDTO;

import com.bilkent.erasmus.enums.SemesterOfferings;
import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.models.universityModels.PartnerUniversityErasmus;
import com.bilkent.erasmus.models.userModels.AdministrativeModels.ExchangeCoordinator;
import lombok.Data;

import javax.validation.constraints.NotNull;
import java.util.List;

@Data
public class ApplicationErasmusDTO {

    private int id;

    private String academicYear;

    private SemesterOfferings semester;

    private ExchangeCoordinator coordinator;

    private int studentId;

    @NotNull(message = "Schools field cannot be empty")
    private List<PartnerUniversityErasmus> schools;

    private Status status;

    private long date;
}
