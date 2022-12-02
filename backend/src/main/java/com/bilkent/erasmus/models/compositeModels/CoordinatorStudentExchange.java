package com.bilkent.erasmus.models.compositeModels;

import com.bilkent.erasmus.models.userModels.AdministrativeModels.ExchangeCoordinator;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudentExchange;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "coordinatorStudentExchange")
public class CoordinatorStudentExchange {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "outGoingStudentExchange_id")
    private OutGoingStudentExchange student;

    @ManyToOne
    private ExchangeCoordinator exchangeCoordinator;

}
