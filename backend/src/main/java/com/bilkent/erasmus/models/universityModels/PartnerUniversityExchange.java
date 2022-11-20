package com.bilkent.erasmus.models.universityModels;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "exchangeUniversity")
public class PartnerUniversityExchange extends PartnerUniversity {
}
