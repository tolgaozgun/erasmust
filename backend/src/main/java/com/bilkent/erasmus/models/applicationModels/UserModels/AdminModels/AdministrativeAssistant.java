package com.bilkent.erasmus.models.applicationModels.UserModels.AdminModels;

import com.bilkent.erasmus.models.AdministrativeModels.Faculty;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "administrativeAssistant")
public class AdministrativeAssistant extends Administrative{

    @OneToOne
    private Faculty faculty;
}
