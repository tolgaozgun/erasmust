package com.bilkent.erasmus.enums;

public enum ToDoType {
    PREAPPROVAL("preapproval"),
    COURSE_REVIEW("course-review"),
    LEARNING_AGREEMENT("learning-agreement")
    ;

    private final String type;

    ToDoType(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }
}
