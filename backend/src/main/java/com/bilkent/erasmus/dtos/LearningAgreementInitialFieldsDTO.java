package com.bilkent.erasmus.dtos;

import com.bilkent.erasmus.embeddables.BilkentInformation;
import com.bilkent.erasmus.models.applicationModels.PreApprovalForms.CourseReviewFormNew;
import com.bilkent.erasmus.models.applicationModels.learningAgreementForms.MobilityCourseForm;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudent;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.checkerframework.checker.units.qual.A;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LearningAgreementInitialFieldsDTO {

    BilkentInformation bilkentInformation;

    List<MobilityCourseForm> mobilityCourseForms;

    OutGoingStudent outGoingStudent;


}
