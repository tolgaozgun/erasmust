package com.bilkent.erasmus.models.enums;

public enum LetterGrade {
    A_PLUS(26),
    A(25),
    A_MINUS(22),
    B_PLUS(19),
    B(15),
    B_MINUS(11),
    C_PLUS(6),
    C(1),
    C_MINUS(0),
    D_PLUS(0),
    D(0),
    F(0),
    FZ(0),
    FX(0),
    W(0);

    private int point;
    // getter method
    public int getPoint()
    {
        return this.point;
    }

    LetterGrade(int point)
    {
        this.point = point;
    }
}
