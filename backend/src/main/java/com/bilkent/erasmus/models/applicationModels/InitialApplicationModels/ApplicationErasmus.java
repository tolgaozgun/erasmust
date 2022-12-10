package com.bilkent.erasmus.models.applicationModels.InitialApplicationModels;

import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudentErasmus;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Data
@Entity
//@DiscriminatorValue("erasmus")
public class ApplicationErasmus extends Application implements Comparable<ApplicationErasmus> {

    @ManyToOne
    private OutGoingStudentErasmus student;

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
