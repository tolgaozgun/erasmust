package com.bilkent.erasmus.models.courseModels;

import com.bilkent.erasmus.enums.CourseApprovalStatus;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "coursesHost")
public class CourseHost extends Course {

    private Boolean isNeedToBeMerged;

    private Boolean isApprovedPrev;

    @Enumerated(EnumType.STRING)
    private CourseApprovalStatus status;

    // todo --> add this field
   // private boolean isPreviouslyApproved;


}
