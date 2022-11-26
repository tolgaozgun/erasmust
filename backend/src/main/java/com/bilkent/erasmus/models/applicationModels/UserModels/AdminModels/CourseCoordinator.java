package com.bilkent.erasmus.models.applicationModels.UserModels.AdminModels;

import com.bilkent.erasmus.models.AdministrativeModels.Department;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "courseCoordinator")
public class CourseCoordinator extends Administrative {

    @ManyToOne
    private Department department;
}
