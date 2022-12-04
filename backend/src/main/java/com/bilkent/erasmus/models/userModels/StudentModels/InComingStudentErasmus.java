package com.bilkent.erasmus.models.userModels.StudentModels;

import com.bilkent.erasmus.models.universityModels.PartnerUniversityErasmus;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "studentsInComingErasmus")
public class InComingStudentErasmus extends Student {

    @ManyToOne
    private PartnerUniversityErasmus partnerUniversity;

}
