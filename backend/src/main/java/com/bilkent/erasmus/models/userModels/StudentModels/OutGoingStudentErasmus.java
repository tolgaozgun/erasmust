package com.bilkent.erasmus.models.userModels.StudentModels;


import com.bilkent.erasmus.enums.LetterGrade;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "studentsOutGoingErasmus")
public class OutGoingStudentErasmus extends Student {

    @Enumerated(EnumType.STRING)
    private LetterGrade engLetterGrade101;

    @Enumerated(EnumType.STRING)
    private LetterGrade engLetterGrade102;

    private int semester;

    private Double erasmusPoint;

}
