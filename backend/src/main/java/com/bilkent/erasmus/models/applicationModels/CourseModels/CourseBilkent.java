package com.bilkent.erasmus.models.applicationModels.CourseModels;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@Table(name = "courseBilkent")
public class CourseBilkent extends Course {

    private Boolean isStudentNeedToAskCoordinator;

}
