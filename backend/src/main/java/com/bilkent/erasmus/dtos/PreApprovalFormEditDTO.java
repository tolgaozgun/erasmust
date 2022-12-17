package com.bilkent.erasmus.dtos;

import com.bilkent.erasmus.enums.SemesterOfferings;
import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.models.applicationModels.PreApprovalForms.CourseReviewFormNew;
import com.bilkent.erasmus.models.universityModels.PartnerUniversityErasmus;
import com.bilkent.erasmus.models.userModels.AdministrativeModels.ExchangeCoordinator;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudent;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class PreApprovalFormEditDTO {

    private int id;

    private String academicYear;

    private SemesterOfferings semester;

    private Date approvalDate;

    private Status status;

    private OutGoingStudent student;

    private ExchangeCoordinator exchangeCoordinator;

    private List<CourseReviewFormNew> forms;

    private PartnerUniversityErasmus partnerUniversityErasmus;
}
