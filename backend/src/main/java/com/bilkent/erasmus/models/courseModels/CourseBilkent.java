package com.bilkent.erasmus.models.courseModels;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "bilkentCourses")
public class CourseBilkent extends Course {

    private Boolean isStudentNeedToAskCoordinator;

}
