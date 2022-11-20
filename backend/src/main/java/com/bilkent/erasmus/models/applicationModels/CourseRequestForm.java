package com.bilkent.erasmus.models.applicationModels;

import com.bilkent.erasmus.models.applicationModels.CourseModels.CourseBilkent;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Table
@Entity(name = "courseRequestForm")
public class CourseRequestForm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


 /*   @ElementCollection
    @CollectionTable(name = "requested_courses",  joinColumns = @JoinColumn(name = "user_id"))
    private List<CourseBilkent> requestedCourses;*/
}
