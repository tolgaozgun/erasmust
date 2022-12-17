package com.bilkent.erasmus.dtos;

import com.bilkent.erasmus.enums.CourseApprovalStatus;
import com.bilkent.erasmus.enums.SemesterOfferings;
import lombok.Data;

@Data
public class ReviewFormStudentListDTO {

    private String academicYear;

    private SemesterOfferings semester;

    private CourseApprovalStatus status;
}
