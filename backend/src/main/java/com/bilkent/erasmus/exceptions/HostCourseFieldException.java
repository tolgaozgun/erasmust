package com.bilkent.erasmus.exceptions;

import lombok.Data;

import java.util.List;

@Data
public class HostCourseFieldException extends Exception {

    private String field;
    private String courseName;
    public HostCourseFieldException(String message, String field, String courseName) {
        super(message);
        this.field = field;
        this.courseName = courseName;
    }
}
