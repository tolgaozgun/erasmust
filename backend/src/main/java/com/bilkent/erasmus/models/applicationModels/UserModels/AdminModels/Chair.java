package com.bilkent.erasmus.models.applicationModels.UserModels.AdminModels;

import com.bilkent.erasmus.models.AdministrativeModels.Faculty;
import com.bilkent.erasmus.models.applicationModels.UserModels.User;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "chair")
public class Chair extends User {

    @OneToOne
    private Faculty faculty;
}

