package com.bilkent.erasmus.embeddables;

import com.bilkent.erasmus.enums.DepartmentName;
import com.bilkent.erasmus.models.universityModels.Faculty;
import lombok.Data;

import javax.persistence.Embeddable;
import javax.persistence.Embedded;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Data
@Embeddable
public class ReceivingInstitutionInformation {

    private String nameHost;

    private String erasmusCodeHost;

    private String contactPersonFirstNameHost;

    private String contactPersonLastNameHost;

    private String contactPersonEmailHost;

    private String contactPersonPhoneNumberHost;

    private String contactPersonFunctionHost;

    private DepartmentName departmentHost;

    private String countryCodeHost;

    @ManyToOne
    private Faculty facultyHost;

    private String addressHost;
}
