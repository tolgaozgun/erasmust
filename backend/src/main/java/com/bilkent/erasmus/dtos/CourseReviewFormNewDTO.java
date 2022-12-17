package com.bilkent.erasmus.dtos;

import com.bilkent.erasmus.enums.CourseApprovalStatus;
import com.bilkent.erasmus.models.FileData;
import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
public class CourseReviewFormNewDTO {

    private int id;

    private CourseBilkent courseBilkent;

    private CourseHost courseHost;

    private List<FileData> files;

    private CourseApprovalStatus status;

    private String coordinatorReply;

    private String requirements;

}
