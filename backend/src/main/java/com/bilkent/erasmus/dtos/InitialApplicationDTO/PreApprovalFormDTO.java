package com.bilkent.erasmus.dtos.InitialApplicationDTO;

import com.bilkent.erasmus.enums.SemesterOfferings;
import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class PreApprovalFormDTO {

    private int id;

    private String academicYear;

    private SemesterOfferings semester;

    private int PartnerUniversityId;

    private List<Integer> courseBilkentIds;

    private List<CourseHost> courseHosts;

}
