package com.bilkent.erasmus.models.userModels.AdministrativeModels;

import com.bilkent.erasmus.models.courseModels.Course;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "courseCoordinator")
public class CourseCoordinatorDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    private Course courseGiven;

    @ManyToOne
    private CourseCoordinator coordinator;
}
