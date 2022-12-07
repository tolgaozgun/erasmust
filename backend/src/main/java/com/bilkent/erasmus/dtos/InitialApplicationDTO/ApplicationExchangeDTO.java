package com.bilkent.erasmus.dtos.InitialApplicationDTO;

import com.bilkent.erasmus.embeddables.Signature;
import com.bilkent.erasmus.enums.SemesterOfferings;
import com.bilkent.erasmus.models.userModels.AdministrativeModels.ExchangeCoordinator;
import lombok.Data;

import java.time.LocalDate;

@Data
public class ApplicationExchangeDTO {

    private int id;

    private SemesterOfferings appliedSemester;

    private Signature signature;

    private LocalDate signAt;

    private Boolean isNominated;

    private Boolean isConfirmedByStudent;

    private ExchangeCoordinator coordinator;

    private int studentId;
}
