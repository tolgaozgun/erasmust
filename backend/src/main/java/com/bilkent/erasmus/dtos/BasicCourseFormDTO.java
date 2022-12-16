package com.bilkent.erasmus.dtos;

import lombok.Data;

@Data
public class BasicCourseFormDTO {

    private int bilkentCourseId;

    private int hostCourseId;

    private String description;

}
