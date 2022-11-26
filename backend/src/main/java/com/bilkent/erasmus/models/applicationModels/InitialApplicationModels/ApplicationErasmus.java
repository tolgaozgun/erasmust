package com.bilkent.erasmus.models.applicationModels.InitialApplicationModels;

import com.bilkent.erasmus.models.applicationModels.UserModels.StudentModels.OutGoingStudentErasmus;
import lombok.Data;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Data
@Entity
//@DiscriminatorValue("erasmus")
public class ApplicationErasmus extends Application {

    @ManyToOne
    private OutGoingStudentErasmus student;

}
