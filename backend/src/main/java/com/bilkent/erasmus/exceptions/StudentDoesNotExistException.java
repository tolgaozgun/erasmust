package com.bilkent.erasmus.exceptions;

import lombok.Data;

@Data
public class StudentDoesNotExistException extends Exception{
    private String starsId;
    public StudentDoesNotExistException(String message, String starsId) {
        super(message);
        this.starsId = starsId;
    }
}
