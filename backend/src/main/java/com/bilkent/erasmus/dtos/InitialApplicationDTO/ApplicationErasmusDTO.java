package com.bilkent.erasmus.dtos.InitialApplicationDTO;

import com.bilkent.erasmus.models.enums.Status;
import com.bilkent.erasmus.models.universityModels.PartnerUniversityErasmus;
import com.bilkent.erasmus.models.userModels.AdministrativeModels.ExchangeCoordinator;
import lombok.Data;

import java.util.List;

@Data
public class ApplicationErasmusDTO {

    private int id;

    private ExchangeCoordinator coordinator;

    private int studentId;

    private List<PartnerUniversityErasmus> schools;

    private Status status;
}
