package com.bilkent.erasmus.models.userModels.AdministrativeModels;


import com.bilkent.erasmus.embeddables.Signature;
import com.bilkent.erasmus.models.universityModels.Department;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "exchangeCoordinators")
public class ExchangeCoordinator extends CourseCoordinator { // its names is replaced, previous name: Coordinator

    // @workLoad will be expanded in the future to balance the paper
    // work between coordinators. For the sake of simplicity
    // it is set String for now.
    private String workLoad;

    private Signature signature;
}