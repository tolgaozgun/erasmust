package com.bilkent.erasmus.embeddables;

import com.bilkent.erasmus.models.universityModels.Faculty;
import lombok.Data;

import javax.persistence.Embeddable;
import javax.persistence.Embedded;
import javax.persistence.OneToOne;

@Data
@Embeddable
public class BilkentInformation {

    private String name;

    private String erasmusCode;

    private String contactPersonName;

    private String contactPersonEmail;

    @OneToOne
    private Faculty faculty;

    @Embedded
    private Address address;
}
