package com.bilkent.erasmus.models.applicationModels.PreApprovalForms;

import com.bilkent.erasmus.enums.SemesterOfferings;
import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.models.applicationModels.courseReviewForms.CourseReviewForm;
import com.bilkent.erasmus.models.universityModels.PartnerUniversityErasmus;
import com.bilkent.erasmus.models.userModels.AdministrativeModels.ExchangeCoordinator;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudent;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@Entity
@Table(name = "preApprovalFormsVersion2")
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PreApprovalFormNew {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String academicYear;

    @Enumerated(EnumType.STRING)
    private SemesterOfferings semester;

    private Date approvalDate;

    private long createDate;

    private Status status;

    @ManyToOne
    private OutGoingStudent student;

    @ManyToOne
    private ExchangeCoordinator exchangeCoordinator;

    @ManyToMany
    @JoinTable(
            name = "PreApprovalFormErasmusDetailNew",
            joinColumns = @JoinColumn(
                    name = "preApprovalFormId", referencedColumnName = "id"
            ),
            inverseJoinColumns = @JoinColumn(
                    name = "CourseReviewFormNewId", referencedColumnName = "id"
            )
    )
    private List<CourseReviewFormNew> forms;

    @ManyToOne
    private PartnerUniversityErasmus partnerUniversityErasmus;
}
