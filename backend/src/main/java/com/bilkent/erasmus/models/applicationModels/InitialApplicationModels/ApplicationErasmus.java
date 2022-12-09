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
public class ApplicationErasmus extends Application implements Comparable<ApplicationErasmus> {

    @ManyToOne
    private OutGoingStudentErasmus student;

    @ManyToOne
    private PartnerUniversityErasmus assignedUniversity;

    @ManyToMany
    @JoinTable(
            name = "app_uni",
            joinColumns = @JoinColumn(
                    name = "app_id", referencedColumnName = "id"
            ),
            inverseJoinColumns = @JoinColumn(
                    name = "uni_id", referencedColumnName = "id"
            )
    )
    private List<PartnerUniversityErasmus> schools;

    @Override
    public int compareTo(ApplicationErasmus o) {
        if(student.getErasmusPoint().equals(o.student.getErasmusPoint())) {
            return 0;
        }
        else if (student.getErasmusPoint() > o.student.getErasmusPoint()){
            return 1;
        }
        else {
            return -1;
        }
    }
}
