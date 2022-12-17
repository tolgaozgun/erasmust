package com.bilkent.erasmus.models.applicationModels.PreApprovalForms;

import com.bilkent.erasmus.enums.CourseApprovalStatus;
import com.bilkent.erasmus.enums.SemesterOfferings;
import com.bilkent.erasmus.models.FileData;
import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "courseReviewFormsNew")
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CourseReviewFormNew {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    private CourseBilkent courseBilkent;

    @ManyToOne
    private CourseHost courseHost;

    @ElementCollection
    @CollectionTable(
            name = "uploadFiles"
            ,joinColumns = @JoinColumn(
                    name = "courseReviewFormId"),
            foreignKey = @ForeignKey(name = "uploadedFilePk"))
    private List<FileData> files;

    @Enumerated(EnumType.STRING)
    private CourseApprovalStatus status;

    private String coordinatorReply;

    private String requirements;

}
