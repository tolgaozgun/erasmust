package com.bilkent.erasmus.dtos;

import com.bilkent.erasmus.enums.CourseApprovalStatus;
import com.bilkent.erasmus.enums.SemesterOfferings;
import com.bilkent.erasmus.models.FileData;
import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CourseReviewFormResponseDTO {

    private int id;

    private CourseBilkent courseBilkent;

    private CourseHost courseHost;

    private List<FileData> files;

    private CourseApprovalStatus status;

    private String coordinatorReply;

    private String requirements;

    private long date;

    private String academicYear;

    private SemesterOfferings semester;

    private String firstName;

    private String lastName;
}
