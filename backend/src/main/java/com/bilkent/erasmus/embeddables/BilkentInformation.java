package com.bilkent.erasmus.embeddables;

import com.bilkent.erasmus.enums.DepartmentName;
import com.bilkent.erasmus.models.universityModels.Faculty;
import lombok.Data;

import javax.persistence.*;

@Data
@Embeddable
public class BilkentInformation {

    private String nameBilkent;

    private String erasmusCodeBilkent;

    private String contactPersonFirstNameBilkent;

    private String contactPersonLastNameBilkent;

    private String contactPersonEmailBilkent;

    private String contactPersonPhoneNumberBilkent;

    private String contactPersonFunctionBilkent;

    private DepartmentName departmentBilkent;

    private String countryCodeBilkent;

    @ManyToOne(cascade = CascadeType.ALL)
    private Faculty facultyBilkent;

    private String addressBilkent;

}
