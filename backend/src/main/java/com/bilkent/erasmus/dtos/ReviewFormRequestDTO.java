package com.bilkent.erasmus.dtos;

import com.bilkent.erasmus.models.enums.CourseApprovalStatus;
import com.bilkent.erasmus.models.enums.Status;
import lombok.Data;

@Data
public class ReviewFormRequestDTO {

    private CourseApprovalStatus status;
}
