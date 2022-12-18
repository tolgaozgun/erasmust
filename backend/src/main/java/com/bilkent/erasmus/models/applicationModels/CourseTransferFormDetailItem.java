package com.bilkent.erasmus.models.applicationModels;

import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "courseTransferDetailItem")
public class CourseTransferFormDetailItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    CourseBilkent courseBilkent;

    @ManyToOne
    CourseHost courseHost;

    private double grade;
}
