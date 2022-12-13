package com.bilkent.erasmus.dtos;

import com.bilkent.erasmus.models.enums.CourseApprovalStatus;
import lombok.Data;

@Data
public class ReviewFormListDTO {

    private CourseApprovalStatus status;
}
