package com.bilkent.erasmus.models.courseModels;

import com.bilkent.erasmus.models.universityModels.Department;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "coursesHost")
@AllArgsConstructor
@NoArgsConstructor
public class CourseHost extends Course {

    private Boolean isNeedToBeMerged;

    private Boolean isApprovedPrev;

    @Builder(builderMethodName = "courseHostBuilder")
    public CourseHost(int id
            ,String name
            ,Double creditECTS
            ,Double creditBilkent
            ,Boolean isProjectCourse
            ,Department underDepartment
            ,Boolean isNeedToBeMerged
            ,Boolean isApprovedPrev) {
        super(id, name, creditECTS, creditBilkent, isProjectCourse, underDepartment);
        this.isNeedToBeMerged = isNeedToBeMerged;
        this.isApprovedPrev = isApprovedPrev;
    }

    // todo --> add this field
   // private boolean isPreviouslyApproved;


}
