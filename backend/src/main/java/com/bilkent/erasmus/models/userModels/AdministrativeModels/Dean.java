package com.bilkent.erasmus.models.userModels.AdministrativeModels;

import com.bilkent.erasmus.models.userModels.User;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "dean")
public class Dean extends User {

    private Boolean status; // temporary field to create table
}
