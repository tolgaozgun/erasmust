package com.bilkent.erasmus.models.userModels.StudentModels;


import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "outGoingStudentExchange")
public class OutGoingStudentExchange extends Student {

    private Boolean isApplicationApproved;

    private Double exchangePoint;

}
