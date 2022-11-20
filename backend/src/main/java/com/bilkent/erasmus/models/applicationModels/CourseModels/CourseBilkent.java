package com.bilkent.erasmus.models.applicationModels.CourseModels;

import lombok.Data;

@Data
//@Entity
public class CourseBilkent extends Course {

    private Boolean isStudentNeedToAskCoordinator;

}
