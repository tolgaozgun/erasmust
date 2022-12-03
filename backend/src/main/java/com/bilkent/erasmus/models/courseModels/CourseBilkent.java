package com.bilkent.erasmus.models.courseModels;

import com.bilkent.erasmus.models.userModels.AdministrativeModels.CourseCoordinator;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "coursesBilkent")
public class CourseBilkent extends Course {

    @ManyToOne
    private CourseCoordinator courseCoordinator;

}
