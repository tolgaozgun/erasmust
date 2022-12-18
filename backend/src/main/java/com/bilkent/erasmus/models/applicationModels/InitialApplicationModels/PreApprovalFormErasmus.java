package com.bilkent.erasmus.models.applicationModels.InitialApplicationModels;

import com.bilkent.erasmus.models.universityModels.PartnerUniversityErasmus;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Data
@Entity
public class PreApprovalFormErasmus extends PreApprovalForm {

    @ManyToOne(fetch = FetchType.LAZY)
    private PartnerUniversityErasmus partnerUniversity;


}





