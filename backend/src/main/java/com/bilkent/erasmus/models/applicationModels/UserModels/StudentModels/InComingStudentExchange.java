package com.bilkent.erasmus.models.applicationModels.UserModels.StudentModels;

import com.bilkent.erasmus.models.universityModels.PartnerUniversityExchange;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "inComingStudentExchange")
public class InComingStudentExchange extends Student  {

    @ManyToOne
    private PartnerUniversityExchange partnerUniversity;

}
