package com.bilkent.erasmus.models.userModels.AdministrativeModels;

import com.bilkent.erasmus.models.universityModels.Department;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "courseCoordinators")
@Inheritance(strategy = InheritanceType.JOINED)
public class CourseCoordinator extends Administrative {

    @ManyToOne
    private Department department;
}
