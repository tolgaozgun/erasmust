package com.bilkent.erasmus.models.userModels.AdministrativeModels;

import com.bilkent.erasmus.models.universityModels.Faculty;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "administrativeAssistants")
public class AdministrativeAssistant extends Administrative{

    @OneToOne
    private Faculty faculty;
}
