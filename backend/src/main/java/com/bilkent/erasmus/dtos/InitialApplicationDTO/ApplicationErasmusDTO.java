package com.bilkent.erasmus.dtos.InitialApplicationDTO;

import com.bilkent.erasmus.embeddables.Signature;
import com.bilkent.erasmus.enums.SemesterOfferings;
import com.bilkent.erasmus.models.userModels.AdministrativeModels.ExchangeCoordinator;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudentErasmus;
import lombok.Data;

import java.time.LocalDate;

@Data
public class ApplicationErasmusDTO {

    private int id;

    private SemesterOfferings appliedSemester;

    private Signature signature;

    private LocalDate signAt;

    private ExchangeCoordinator coordinator;

    private int studentId;
}
