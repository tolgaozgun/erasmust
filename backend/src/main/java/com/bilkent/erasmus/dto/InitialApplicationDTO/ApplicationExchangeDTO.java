package com.bilkent.erasmus.dto.InitialApplicationDTO;

import com.bilkent.erasmus.embeddables.Signature;
import com.bilkent.erasmus.enums.SemesterOfferings;
import com.bilkent.erasmus.models.applicationModels.UserModels.AdminModels.Coordinator;
import com.bilkent.erasmus.models.applicationModels.UserModels.StudentModels.OutGoingStudentExchange;
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

    private Coordinator coordinator;

    private OutGoingStudentExchange student;
}
