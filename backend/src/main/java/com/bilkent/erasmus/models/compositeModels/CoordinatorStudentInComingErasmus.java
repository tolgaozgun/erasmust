package com.bilkent.erasmus.models.compositeModels;

import com.bilkent.erasmus.models.userModels.AdministrativeModels.ExchangeCoordinator;
import com.bilkent.erasmus.models.userModels.StudentModels.InComingStudentErasmus;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "compositeCoordinatorStudentInComingErasmus")
public class CoordinatorStudentInComingErasmus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "inComingStudentErasmus_id")
    private InComingStudentErasmus student;

    @ManyToOne
    private ExchangeCoordinator exchangeCoordinator;
}
