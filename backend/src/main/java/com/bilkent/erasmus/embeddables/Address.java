package com.bilkent.erasmus.embeddables;

import javax.persistence.Embeddable;

@Embeddable
public class Address {

    private String fullAddress;

    private String postalCode;

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setFullAddress(String hostFullAddress) {
        this.fullAddress = hostFullAddress;
    }

    public String getFullAddress() {
        return fullAddress;
    }
}
