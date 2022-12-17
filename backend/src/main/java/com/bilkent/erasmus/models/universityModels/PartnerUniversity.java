package com.bilkent.erasmus.models.universityModels;

import com.bilkent.erasmus.embeddables.Address;
import com.bilkent.erasmus.enums.DepartmentName;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "partnerUniversities")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class PartnerUniversity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    private String country;

    private String city;

    private Integer quota;

    @Embedded
    private Address address;

    @Enumerated(EnumType.STRING)
    DepartmentName department;
}
