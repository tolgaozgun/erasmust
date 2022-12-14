package com.bilkent.erasmus.models.userModels.StudentModels;

import com.bilkent.erasmus.models.enums.LetterGrade;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "studentsOutGoing")
public class OutGoingStudent extends Student {

    @Enumerated(EnumType.STRING)
    private LetterGrade engLetterGrade101;

    @Enumerated(EnumType.STRING)
    private LetterGrade engLetterGrade102;

    private boolean isChildOfVeteranOrMartyr;

    private Double erasmusPoint;
}
