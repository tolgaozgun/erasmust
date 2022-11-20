package com.bilkent.erasmus.models.StudentModels;


import com.bilkent.erasmus.enums.LetterGrade;
import com.bilkent.erasmus.models.User;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "outGoingStudentErasmus")
public class OutGoingStudentErasmus extends Student {

    @Enumerated(EnumType.STRING)
    private LetterGrade engLetterGrade101;

    @Enumerated(EnumType.STRING)
    private LetterGrade engLetterGrade102;

    private Boolean isApplicationApproved;

    private Double erasmusPoint;

}
