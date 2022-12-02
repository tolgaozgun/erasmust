package com.bilkent.erasmus.models.compositeModels;

import com.bilkent.erasmus.models.userModels.AdministrativeModels.ExchangeCoordinator;
import com.bilkent.erasmus.models.userModels.StudentModels.InComingStudentExchange;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "coordinatorStudentInComingExchange")
public class CoordinatorStudentInComingExchange {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "inComingStudentExchange_id")
    private InComingStudentExchange student;

    @ManyToOne
    private ExchangeCoordinator exchangeCoordinator;
}
