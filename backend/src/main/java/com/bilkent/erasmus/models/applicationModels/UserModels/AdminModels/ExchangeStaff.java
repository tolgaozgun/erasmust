package com.bilkent.erasmus.models.applicationModels.UserModels.AdminModels;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "exchangeStaff")
public class ExchangeStaff extends Administrative {

    private String status; // temp field to create table
}
