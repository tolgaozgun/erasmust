package com.bilkent.erasmus.models.compositeModels;

import com.bilkent.erasmus.models.userModels.AdministrativeModels.ExchangeCoordinator;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudent;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "compositeCoordinatorStudentOutGoing")
public class CompositeCoordinatorStudent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    private OutGoingStudent student;

    @ManyToOne
    private ExchangeCoordinator exchangeCoordinator;
}
