package com.bilkent.erasmus.exceptions;

import lombok.Data;

@Data
public class PasswordsDoNotMatchException extends Exception{
    public PasswordsDoNotMatchException(String message) {
        super(message);
    }
}
