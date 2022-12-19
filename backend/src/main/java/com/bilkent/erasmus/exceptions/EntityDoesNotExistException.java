package com.bilkent.erasmus.exceptions;

import lombok.Data;

@Data
public class EntityDoesNotExistException extends Exception{
    private int id;
    public EntityDoesNotExistException(String message, int id) {
        super(message);
        this.id = id;
    }
}
