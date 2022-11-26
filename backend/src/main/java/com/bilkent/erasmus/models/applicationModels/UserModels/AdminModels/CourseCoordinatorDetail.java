package com.bilkent.erasmus.models.applicationModels.UserModels.AdminModels;

import com.bilkent.erasmus.models.applicationModels.CourseModels.Course;
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
