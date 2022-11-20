package com.bilkent.erasmus.embeddables;

import lombok.Data;

import javax.persistence.Embeddable;
import javax.persistence.Embedded;

@Data
@Embeddable
public class ContactInformation {

    private String emailUniversity;

    private String emailPersonal;

    private String phoneNumberWork;

    private String phoneNumberPersonal;

    @Embedded
    private Address address;
}
