package com.bilkent.erasmus.dtos.UserDtos.StudentDtos;

import com.bilkent.erasmus.enums.LetterGrade;
import lombok.Data;

@Data
public class OutGoingStudentErasmusDTO {

    private LetterGrade engLetterGrade101;

    private LetterGrade engLetterGrade102;

    private Boolean isApplicationApproved;

    private Double erasmusPoint;
}
