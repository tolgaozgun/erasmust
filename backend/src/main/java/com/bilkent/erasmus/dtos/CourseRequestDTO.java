package com.bilkent.erasmus.dtos;

import lombok.Data;

import java.util.List;
@Data
public class CourseRequestDTO {

    private List<String> courseNames;

    private int ownerId;
}
