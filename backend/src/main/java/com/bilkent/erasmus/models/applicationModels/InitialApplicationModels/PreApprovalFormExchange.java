package com.bilkent.erasmus.models.applicationModels.InitialApplicationModels;

import com.bilkent.erasmus.models.universityModels.PartnerUniversityExchange;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudentExchange;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Data
@Entity
public class PreApprovalFormExchange extends PreApprovalForm {

    @ManyToOne
    private PartnerUniversityExchange partnerUniversity;

    @OneToOne
    private OutGoingStudentExchange studentExchange;

}
