package com.bilkent.erasmus.models.applicationModels.InitialApplicationModels;

import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudentErasmus;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Data
@Entity
//@DiscriminatorValue("erasmus")
public class ApplicationErasmus extends Application {

    @ManyToOne
    private OutGoingStudentErasmus student;

}
