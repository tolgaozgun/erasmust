package com.bilkent.erasmus.models.applicationModels.InitialApplicationModels;

import com.bilkent.erasmus.embeddables.Signature;
import com.bilkent.erasmus.enums.SemesterOfferings;
import com.bilkent.erasmus.models.applicationModels.UserModels.AdminModels.Coordinator;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
@Table(name = "applications")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Enumerated(EnumType.STRING)
    private SemesterOfferings appliedSemester;

    @Embedded
    private Signature signature;

    private LocalDate signAt;

    private Boolean isNominated;

    private Boolean isConfirmedByStudent;

    @ManyToOne
    private Coordinator coordinator;

}
