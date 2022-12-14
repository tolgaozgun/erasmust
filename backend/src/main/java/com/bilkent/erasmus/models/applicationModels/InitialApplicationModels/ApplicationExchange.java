package com.bilkent.erasmus.models.applicationModels.InitialApplicationModels;

import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudentExchange;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Data
@Entity
//@DiscriminatorValue("exchange")
public class ApplicationExchange extends Application {

}
