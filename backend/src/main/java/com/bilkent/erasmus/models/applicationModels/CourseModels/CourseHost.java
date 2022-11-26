package com.bilkent.erasmus.models.applicationModels.CourseModels;

import com.bilkent.erasmus.enums.CourseApprovalStatus;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "hostCourses")
public class CourseHost extends Course {

    private Boolean isNeedToBeMerged;

    private Boolean isApprovedPrev;

    @Enumerated(EnumType.STRING)
    private CourseApprovalStatus status;


}
