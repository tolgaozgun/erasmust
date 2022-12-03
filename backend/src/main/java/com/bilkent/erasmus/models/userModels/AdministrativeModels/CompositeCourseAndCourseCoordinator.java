package com.bilkent.erasmus.models.userModels.AdministrativeModels;

import com.bilkent.erasmus.models.courseModels.Course;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "compositeCourseAndCourseCoordinator")
public class CompositeCourseAndCourseCoordinator {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    private Course courseGiven;

    @ManyToOne
    private CourseCoordinator coordinator;
}
