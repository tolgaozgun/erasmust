package com.bilkent.erasmus.models.applicationModels.InitialApplicationModels;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Data
@Entity
//@DiscriminatorValue("exchange")
public class ApplicationExchange extends Application {

}
