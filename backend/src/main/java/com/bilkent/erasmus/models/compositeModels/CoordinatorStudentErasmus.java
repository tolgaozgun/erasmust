package com.bilkent.erasmus.models.compositeModels;

import com.bilkent.erasmus.models.userModels.AdministrativeModels.ExchangeCoordinator;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudent;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudentErasmus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.management.ConstructorParameters;
import javax.persistence.*;

@Data
@Entity
@Table(name = "compositeCoordinatorStudentErasmus")
@NoArgsConstructor
@AllArgsConstructor
public class CoordinatorStudentErasmus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    private OutGoingStudent student;

    @ManyToOne
    private ExchangeCoordinator exchangeCoordinator;

}
