package com.bilkent.erasmus.models.userModels.AdministrativeModels;
import com.bilkent.erasmus.embeddables.Signature;
import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "exchangeCoordinators")
public class ExchangeCoordinator extends CourseCoordinator { // its names is replaced, previous name: Coordinator

    private int workLoad;

    private Signature signature;
}