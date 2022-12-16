package com.bilkent.erasmus.services;

import com.bilkent.erasmus.dtos.InitialApplicationDTO.LearningAgreementDTO;
import com.bilkent.erasmus.dtos.ReviewFormListDTO;
import com.bilkent.erasmus.dtos.ReviewFormRequestDTO;
import com.bilkent.erasmus.dtos.ReviewFormStudentListDTO;
import com.bilkent.erasmus.mappers.InitialApplicationMappper.LearningAgreementMapper;
import com.bilkent.erasmus.models.enums.MobilityType;
import com.bilkent.erasmus.models.enums.SemesterOfferings;
import com.bilkent.erasmus.models.enums.Status;
import com.bilkent.erasmus.models.applicationModels.learningAgreementForms.LearningAgreementErasmus;
import com.bilkent.erasmus.models.compositeModels.MobilityDetail;
import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudentErasmus;
import com.bilkent.erasmus.repositories.CoordinatorStudentErasmusRepository;
import com.bilkent.erasmus.repositories.PartnerUniversityErasmusRepository;
import com.bilkent.erasmus.repositories.applicationRepositories.LearningAgreementErasmusDetailRepository;
import com.bilkent.erasmus.repositories.applicationRepositories.LearningAgreementErasmusRepository;
import com.bilkent.erasmus.repositories.studentRepository.OutGoingStudentErasmusRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
@Slf4j
public class LearningAgreementErasmusService {

    private final LearningAgreementErasmusRepository erasmusRepository;

    private final PartnerUniversityErasmusRepository universityErasmusRepository;

    private final CoordinatorStudentErasmusRepository coordinatorStudentErasmusRepository;

    private final LearningAgreementErasmusDetailRepository erasmusDetailRepository;

    private final CourseHostService courseHostService;

    private final CourseBilkentService courseBilkentService;

    private final OutGoingStudentErasmusRepository outGoingStudentErasmusRepository;

    private final LearningAgreementMapper agreementMapper;

    private LearningAgreementErasmusService(LearningAgreementErasmusRepository formErasmusRepository, PartnerUniversityErasmusRepository universityErasmusRepository,
                                            CoordinatorStudentErasmusRepository coordinatorStudentErasmusRepository, LearningAgreementErasmusDetailRepository erasmusDetailRepository,
                                            CourseHostService courseHostService, CourseBilkentService courseBilkentService, OutGoingStudentErasmusRepository outGoingStudentErasmusRepository, LearningAgreementMapper agreementMapper){
        this.erasmusRepository = formErasmusRepository;
        this.universityErasmusRepository = universityErasmusRepository;
        this.coordinatorStudentErasmusRepository = coordinatorStudentErasmusRepository;
        this.erasmusDetailRepository = erasmusDetailRepository;
        this.courseHostService = courseHostService;
        this.courseBilkentService = courseBilkentService;
        this.outGoingStudentErasmusRepository = outGoingStudentErasmusRepository;
        this.agreementMapper = agreementMapper;
    }

    /*private boolean notifyStudent(String studentName){

    }

    private boolean notifyCoordinator(String coordinatorName){

    }*/

    public boolean cancelAgreement() throws Exception {
        String starsId = SecurityContextHolder.getContext().getAuthentication().getName();
            LearningAgreementErasmus agreementErasmus = erasmusRepository.findByStudent_Id(starsId);
            if (!(agreementErasmus.getStatus().equals(Status.CANCELLED))) {
                agreementErasmus.setStatus(Status.CANCELLED);
                erasmusRepository.save(agreementErasmus);
                log.info("Learning agreement cancelled");
            }
            else {
                log.info("Learning agreement is already cancelled");
            }
            return true;
    }
    public LearningAgreementErasmus createEmptyLearningAgreement(String academicYear, SemesterOfferings semester) {
        LearningAgreementErasmus form = new LearningAgreementErasmus();
        form.setStatus(Status.IN_PROCESS);
        form.setAcademicYear(academicYear);
        form.setSemester(semester);
        return erasmusRepository.save(form);
    }

    public LearningAgreementErasmus saveFormBeforeMobility(LearningAgreementDTO form) throws Exception {
        LearningAgreementErasmus erasmusForm = createEmptyLearningAgreement(form.getAcademicYear(), form.getSemester());
        OutGoingStudentErasmus student = outGoingStudentErasmusRepository.findByStarsId(form.getStudentId());
        erasmusForm.setCurrentMobility(MobilityType.BEFORE);
        erasmusForm.setStudent(student);

        return erasmusForm;
    }

    public List<LearningAgreementErasmus> retrieveAgreements(MobilityDetail mobility) {

        MobilityType type = mobility.getMobilityType();
        List<LearningAgreementErasmus> agreements = null;
        Status status;

        switch (type) {

            // Case statements
            case BEFORE:
                log.info("agreements before mobility will be listed");
                status = Status.IN_PROCESS;
                agreements = getAgreementsByType(type);
                break;
            case DURING:
                log.info("agreements during mobility will be listed");
                status = Status.IN_PROCESS;
                agreements = getAgreementsByType(type);
                break;
            case AFTER:
                log.info("agreements after mobility will be listed");
                status = Status.IN_PROCESS;
                agreements = getAgreementsByType(type);
                break;
            case DONE:
                log.info("done agreements will be listed");
                status = Status.APPROVED;
                agreements = getAgreementsByType(type);
                break;
        }
        return agreements;
    }

    private List<LearningAgreementErasmus> getAgreementsByType(MobilityType type) {
        List<LearningAgreementErasmus> agreementList = null;
        agreementList = new ArrayList<LearningAgreementErasmus>(erasmusRepository.findAllByCurrentMobility(type));
        agreementList.addAll(erasmusRepository.findAllByCurrentMobility(type));
        return agreementList;
    }

    private List<CourseHost> saveAllHostCourses(List<String> courseNames, List<Double> credits) {
        List<CourseHost> courseHosts = new ArrayList<>();
        for (int i = 0; i < courseNames.size(); i++) {
            courseHosts.add(
                    saveCourseHost(
                            courseNames.get(i),
                            credits.get(i)
                    )
            );
        }
        return courseHosts;
    }

    private List<CourseBilkent> saveAllBilkentCourses(List<String> courseNames, List<Double> credits) {
        List<CourseBilkent> courses = new ArrayList<>();
        for (int i = 0; i < courseNames.size(); i++) {
            courses.add(
                    saveCourseBilkent(
                            courseNames.get(i),
                            credits.get(i)
                    )
            );
        }
        return courses;
    }

/*    private void createMappingObject(LearningAgreementErasmus erasmusForm,
                                     List<CourseReviewForm> reviewForms, int studentId) {
        for (CourseReviewForm form : reviewForms) {
            LearningAgreementErasmusDetail formErasmusDetail = new LearningAgreementErasmusDetail();
            formErasmusDetail.setLearningAgreement(erasmusForm);
            formErasmusDetail.setReviewForm(form);
            formErasmusDetail.setCoordinatorStudent(coordinatorStudentErasmusRepository.findByStudent_Id(studentId));
            erasmusDetailRepository.save(formErasmusDetail);
        }
    }*/

    private CourseHost saveCourseHost(String name, double credit) {
        CourseHost course = new CourseHost();
        course.setName(name);
        course.setCreditECTS(credit);
        return courseHostService.save(course);
    }

    private CourseBilkent saveCourseBilkent(String name, double credit){
        CourseBilkent course = new CourseBilkent();
        course.setName(name);
        course.setCreditECTS(credit);
        return courseBilkentService.save(course);
    }
/*
    public List<LearningAgreementErasmus> listForCoordinator(ReviewFormListDTO filter) {

    }*/

    public List<LearningAgreementDTO> getAllAgreements() {
        return agreementMapper.toLearningAgreementDTOList(erasmusRepository.findAll());
    }
/*

    public List<LearningAgreementErasmus> listForStudent(ReviewFormStudentListDTO filter) {
    }
*/

    public LearningAgreementDTO reviewForm(ReviewFormRequestDTO request, int formId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        LearningAgreementErasmus agreement = erasmusRepository.findByStudent_Id(auth.getName());
        return agreementMapper.toLearningAgreementDTO(agreement);
    }

    public LearningAgreementDTO editForm(LearningAgreementDTO erasmusDTO) {
        // to-do
        return erasmusDTO;
    }
}


