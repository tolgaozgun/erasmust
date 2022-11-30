package com.bilkent.erasmus.models.userModels.AdministrativeModels;

import com.bilkent.erasmus.models.universityModels.Faculty;
import com.bilkent.erasmus.models.userModels.User;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "chair")
public class Chair extends User {

    @OneToOne
    private Faculty faculty;
}

