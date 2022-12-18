package com.bilkent.erasmus.dtos;

import com.bilkent.erasmus.enums.SemesterOfferings;
import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.models.applicationModels.CourseTransferFormDetailItem;
import com.bilkent.erasmus.models.universityModels.PartnerUniversityErasmus;
import com.bilkent.erasmus.models.userModels.AdministrativeModels.Chair;
import com.bilkent.erasmus.models.userModels.AdministrativeModels.Dean;
import com.bilkent.erasmus.models.userModels.AdministrativeModels.ExchangeCoordinator;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudent;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class CourseTransferDTO {

    private int id;

    private Status status;

    private OutGoingStudent student;

    private Chair approvedByChair;
    private Dean approvedByDean;
    private ExchangeCoordinator approvedByExchangeCoordinator;

    private List<CourseTransferDTO> details;

}
