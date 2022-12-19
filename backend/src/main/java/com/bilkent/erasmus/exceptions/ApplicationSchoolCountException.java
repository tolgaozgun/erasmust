package com.bilkent.erasmus.exceptions;

import lombok.Data;

@Data
public class ApplicationSchoolCountException extends Exception{
    int schoolCount;
    public ApplicationSchoolCountException(String message, int schoolCount) {
        super(message);
        this.schoolCount = schoolCount;
    }
}
