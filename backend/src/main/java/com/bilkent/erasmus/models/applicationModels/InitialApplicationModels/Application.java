package com.bilkent.erasmus.models.applicationModels.InitialApplicationModels;

import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.models.userModels.AdministrativeModels.ExchangeCoordinator;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudent;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "applications")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
//@DiscriminatorColumn(name="application_type",
//    discriminatorType = DiscriminatorType.STRING) // --> sets nullable: false
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


    @Enumerated(EnumType.STRING)
    private Status status;

    @ManyToOne
    private ExchangeCoordinator coordinator;

    @ManyToOne
    private OutGoingStudent student;

    private long date;

}
