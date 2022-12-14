package com.bilkent.erasmus.models.applicationModels.InitialApplicationModels;

import com.bilkent.erasmus.embeddables.Signature;
import com.bilkent.erasmus.models.enums.SemesterOfferings;
import com.bilkent.erasmus.models.enums.Status;
import com.bilkent.erasmus.models.userModels.AdministrativeModels.ExchangeCoordinator;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudent;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

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

}
