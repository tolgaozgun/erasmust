package com.bilkent.erasmus.dtos;

import com.bilkent.erasmus.embeddables.Address;
import lombok.Data;

import javax.persistence.Embedded;

@Data
public class PartnerUniversityErasmusDTO {
    private int id;

    private String name;

    private String country;

    private String city;

    private Integer quota;

    private Address address;
}
