package com.bilkent.erasmus.models.applicationModels.InitialApplicationModels;

import com.bilkent.erasmus.models.applicationModels.UserModels.StudentModels.OutGoingStudentExchange;
import lombok.Data;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "applicationExchange")
//@DiscriminatorValue("exchange")
public class ApplicationExchange extends Application {

    @ManyToOne
    private OutGoingStudentExchange student;

}
