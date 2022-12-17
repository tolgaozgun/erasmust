package com.bilkent.erasmus.dtos;

import com.bilkent.erasmus.enums.CourseApprovalStatus;
import lombok.Data;

@Data
public class ReviewFormRequestDTO {

    private CourseApprovalStatus status;
}
