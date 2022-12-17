package com.bilkent.erasmus.dtos;

import com.bilkent.erasmus.models.applicationModels.PreApprovalForms.CourseReviewFormNew;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.checkerframework.checker.units.qual.A;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CourseReviewFormListResponse {

    private int studentId;

    private List<CourseReviewFormNew> courseReviewFormNew;
}
