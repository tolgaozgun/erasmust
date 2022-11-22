package com.bilkent.erasmus.models.applicationModels.UserModels.AdminModels;


import com.bilkent.erasmus.models.AdministrativeModels.Department;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "exchangeCoordinator")
public class ExchangeCoordinator extends Administrative { // its names is replaced, previous name: Coordinator

    @ManyToOne
    private Department department;

    // @workLoad will be expanded in the future to balance the paper
    // work between coordinators. For the sake of simplicity
    // it is set String for now.

    private String workLoad;
}