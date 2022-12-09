package com.bilkent.erasmus.dtos.InitialApplicationDTO;

import com.bilkent.erasmus.embeddables.Signature;
import com.bilkent.erasmus.enums.SemesterOfferings;
import com.bilkent.erasmus.models.universityModels.PartnerUniversityErasmus;
import com.bilkent.erasmus.models.userModels.AdministrativeModels.ExchangeCoordinator;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class ApplicationErasmusDTO {

    private int id;

    private ExchangeCoordinator coordinator;

    private int studentId;

    private List<PartnerUniversityErasmus> schools;
}
