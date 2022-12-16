package com.bilkent.erasmus.models.applicationModels.InitialApplicationModels;

import com.bilkent.erasmus.models.universityModels.PartnerUniversityErasmus;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudentErasmus;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
//@DiscriminatorValue("erasmus")
public class ApplicationErasmus extends Application {


    @ManyToOne
    private PartnerUniversityErasmus assignedUniversity;

    @ManyToMany
    @JoinTable(
            name = "erasmusApplicationDetail",
            joinColumns = @JoinColumn(
                    name = "applicationId", referencedColumnName = "id"
            ),
            inverseJoinColumns = @JoinColumn(
                    name = "universityId", referencedColumnName = "id"
            )
    )
    private List<PartnerUniversityErasmus> schools;

}
