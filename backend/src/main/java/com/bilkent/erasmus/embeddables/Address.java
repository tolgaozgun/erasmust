package com.bilkent.erasmus.embeddables;

import javax.persistence.Embeddable;

@Embeddable
public class Address {

    private String fullAddress;

    private String postalCode;
}
