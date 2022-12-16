package com.bilkent.erasmus.models.applicationModels.InitialApplicationModels;

import com.bilkent.erasmus.models.enums.SemesterOfferings;
import com.bilkent.erasmus.models.enums.Status;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "preApprovalForms")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class PreApprovalForm { // --> create preapproval form detail to map coordinator and courseLists

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String academicYear;

    @Enumerated(EnumType.STRING)
    private SemesterOfferings semester;

    private Date signedAt;

    private Status status;

}
