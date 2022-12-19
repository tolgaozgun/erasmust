package com.bilkent.erasmus.exceptions;

import lombok.Data;

@Data
public class PasswordException extends Exception{
    public PasswordException(String message) {
        super(message);
    }
}
