package com.bilkent.erasmus.models.userModels.AdministrativeModels;

import com.bilkent.erasmus.models.universityModels.Department;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "courseCoordinators")
public class CourseCoordinator extends Administrative {

    @ManyToOne
    private Department department;
}
