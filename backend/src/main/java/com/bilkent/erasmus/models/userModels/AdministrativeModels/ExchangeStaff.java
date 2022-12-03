package com.bilkent.erasmus.models.userModels.AdministrativeModels;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "exchangeStaffs")
public class ExchangeStaff extends Administrative {

    private String status; // temp field to create table
}
