package com.bilkent.erasmus.dtos;

import lombok.Data;

@Data
public class CourseReviewFormCreation {

    private int courseBilkentId;

    private String courseHostName;

    private double courseHostCredit;
}
