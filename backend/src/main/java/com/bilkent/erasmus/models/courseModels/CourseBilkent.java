package com.bilkent.erasmus.models.courseModels;

import com.bilkent.erasmus.models.universityModels.Department;
import com.bilkent.erasmus.models.userModels.AdministrativeModels.CourseCoordinator;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@Table(name = "coursesBilkent")
@AllArgsConstructor
@NoArgsConstructor
public class CourseBilkent extends Course {

    @ManyToOne
    private CourseCoordinator courseCoordinator;

    private String requirements;


    @Builder(builderMethodName = "courseBilkentBuilder")
    public CourseBilkent(int id
            , String name
            , String courseCode
            , Double creditECTS
            , Double creditBilkent
            , Boolean isProjectCourse
            , Department underDepartment
            , CourseCoordinator courseCoordinator
            , String requirements) {
        super(id, name,courseCode, creditECTS, creditBilkent, isProjectCourse, underDepartment);
        this.courseCoordinator = courseCoordinator;
        this.requirements = requirements;
    }

}
