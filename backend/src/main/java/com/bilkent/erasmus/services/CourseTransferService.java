package com.bilkent.erasmus.services;

import com.bilkent.erasmus.dtos.CourseTransferDTO;
import com.bilkent.erasmus.dtos.CourseTransferDetailDTO;
import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.mappers.CourseTransferFormEditMapper;
import com.bilkent.erasmus.models.applicationModels.CourseTransferForm;
import com.bilkent.erasmus.models.applicationModels.CourseTransferFormDetailItem;
import com.bilkent.erasmus.models.applicationModels.PreApprovalForms.CourseReviewFormNew;
import com.bilkent.erasmus.models.applicationModels.PreApprovalForms.PreApprovalFormNew;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudent;
import com.bilkent.erasmus.repositories.PreApprovalFormRepositories.PreApprovalFormRepositoryNew;
import com.bilkent.erasmus.repositories.applicationRepositories.CourseTransferFormDetailRepository;
import com.bilkent.erasmus.repositories.applicationRepositories.CourseTransferFormRepository;
import com.bilkent.erasmus.repositories.applicationRepositories.LearningAgreementErasmusRepository;
import com.bilkent.erasmus.repositories.studentRepository.OutGoingStudentRepository;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;

@Service
public class CourseTransferService {

    private final LearningAgreementErasmusRepository learningAgreementErasmusRepository;
    private final PreApprovalFormRepositoryNew preApprovalFormRepositoryNew;
    private final OutGoingStudentRepository outGoingStudentRepository;
    private final CourseTransferFormDetailRepository courseTransferFormDetailRepository;
    private final CourseTransferFormRepository courseTransferFormRepository;
    private final CourseTransferFormEditMapper courseTransferFormEditMapper;


    public CourseTransferService(LearningAgreementErasmusRepository learningAgreementErasmusRepository, PreApprovalFormRepositoryNew preApprovalFormRepositoryNew, OutGoingStudentRepository outGoingStudentRepository, CourseTransferFormDetailRepository courseTransferFormDetailRepository, CourseTransferFormRepository courseTransferFormRepository, CourseTransferFormEditMapper courseTransferFormEditMapper) {
        this.learningAgreementErasmusRepository = learningAgreementErasmusRepository;
        this.preApprovalFormRepositoryNew = preApprovalFormRepositoryNew;
        this.outGoingStudentRepository = outGoingStudentRepository;
        this.courseTransferFormDetailRepository = courseTransferFormDetailRepository;
        this.courseTransferFormRepository = courseTransferFormRepository;
        this.courseTransferFormEditMapper = courseTransferFormEditMapper;
    }


    public CourseTransferForm create(String starsId) throws Exception {
        OutGoingStudent outGoingStudent = outGoingStudentRepository.findByStarsId(starsId)
                .orElseThrow(() -> new EntityNotFoundException("Student doesnt exist"));
        CourseTransferForm courseTransferForm = new CourseTransferForm(outGoingStudent);
        PreApprovalFormNew preApprovalFormErasmus = preApprovalFormRepositoryNew
                .findByStatusAndStudent_Id(Status.APPROVED, outGoingStudent.getId()).orElseThrow(() -> new EntityNotFoundException("Student doesn't have a preapproval for this Erasmus period"));

        if (courseTransferFormRepository.findByStatusNotAndBelongsTo_StarsId(Status.DONE, starsId).isEmpty()) {
            List<CourseTransferFormDetailItem> detailItems = new ArrayList<>();
            for (CourseReviewFormNew form : preApprovalFormErasmus.getForms()) {
                CourseTransferFormDetailItem detail = new CourseTransferFormDetailItem();
                detail.setCourseBilkent(form.getCourseBilkent());
                detail.setCourseHost(form.getCourseHost());
                courseTransferFormDetailRepository.save(detail);
                detailItems.add(detail);
            }
            courseTransferForm.setDetails(detailItems);
            courseTransferForm.setStatus(Status.IN_PROCESS);
            courseTransferFormRepository.save(courseTransferForm);
        }
        else {
            throw new Exception("Student already has a course transfer form");
        }

        return courseTransferForm;
    }

    public CourseTransferForm edit(CourseTransferDTO dto, int id) {
        CourseTransferForm form = courseTransferFormRepository
                .findById(id).orElseThrow(() -> new EntityNotFoundException("Course transfer form doesn't exist"));
        courseTransferFormEditMapper.updateFromDTO(dto, form);
        courseTransferFormRepository.save(form);
        return form;
    }

    public CourseTransferFormDetailItem editDetail(CourseTransferDetailDTO dto, int id) {
        CourseTransferFormDetailItem detail = courseTransferFormDetailRepository
                .findById(id).orElseThrow(() -> new EntityNotFoundException("Course transfer detail doesn't exist"));
        courseTransferFormEditMapper.updateDetailFromDTO(dto, detail);
        courseTransferFormDetailRepository.save(detail);
        return detail;
    }



}
