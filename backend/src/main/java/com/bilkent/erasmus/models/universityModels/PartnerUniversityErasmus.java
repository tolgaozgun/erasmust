package com.bilkent.erasmus.models.universityModels;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "erasmusUniversity")
public class PartnerUniversityErasmus extends PartnerUniversity {

}
