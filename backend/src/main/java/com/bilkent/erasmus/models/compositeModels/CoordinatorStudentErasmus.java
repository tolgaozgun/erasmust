package com.bilkent.erasmus.models.compositeModels;

import com.bilkent.erasmus.models.userModels.AdministrativeModels.ExchangeCoordinator;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudentErasmus;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "coordinatorStudentErasmus")
public class CoordinatorStudentErasmus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    private OutGoingStudentErasmus student;

    @ManyToOne
    private ExchangeCoordinator exchangeCoordinator;

}
