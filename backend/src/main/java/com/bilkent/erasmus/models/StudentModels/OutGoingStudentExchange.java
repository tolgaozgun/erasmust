package com.bilkent.erasmus.models.StudentModels;


import com.bilkent.erasmus.enums.LetterGrade;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "outGoingStudentExchange")
public class OutGoingStudentExchange extends Student {

    private Boolean isApplicationApproved;

    private Double exchangePoint;

}
