package com.bilkent.erasmus.exceptions;

import lombok.Data;

@Data
public class PreApprovalFormNotCompletedException extends Throwable {

    private String hostCourseName;
    public PreApprovalFormNotCompletedException(String message, String hostCourseName) {
        super(message);
        this.hostCourseName = hostCourseName;
    }

}
