package com.bilkent.erasmus.services;

import com.bilkent.erasmus.dtos.InitialApplicationDTO.LearningAgreementDTO;
import com.bilkent.erasmus.dtos.ReviewFormRequestDTO;
import com.bilkent.erasmus.embeddables.Address;
import com.bilkent.erasmus.embeddables.BilkentInformation;
import com.bilkent.erasmus.embeddables.ReceivingInstitutionInformation;
import com.bilkent.erasmus.enums.*;
import com.bilkent.erasmus.mappers.InitialApplicationMappper.LearningAgreementMapper;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.PreApprovalFormErasmus;
import com.bilkent.erasmus.models.applicationModels.learningAgreementForms.LearningAgreementErasmus;
import com.bilkent.erasmus.models.applicationModels.learningAgreementForms.MobilityCourseForm;
import com.bilkent.erasmus.models.compositeModels.MobilityDetail;
import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import com.bilkent.erasmus.models.universityModels.Faculty;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudentErasmus;
import com.bilkent.erasmus.repositories.CoordinatorStudentErasmusRepository;
import com.bilkent.erasmus.repositories.PartnerUniversityErasmusRepository;
import com.bilkent.erasmus.repositories.applicationRepositories.LearningAgreementErasmusDetailRepository;
import com.bilkent.erasmus.repositories.applicationRepositories.LearningAgreementErasmusRepository;
import com.bilkent.erasmus.repositories.applicationRepositories.PreApprovalFormErasmusRepository;
import com.bilkent.erasmus.repositories.studentRepository.OutGoingStudentErasmusRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
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

    private final PreApprovalFormErasmusRepository preApprovalFormErasmusRepository;

    private final MobilityCourseFormService mobilityCourseFormService;

    private LearningAgreementErasmusService(LearningAgreementErasmusRepository formErasmusRepository, PartnerUniversityErasmusRepository universityErasmusRepository,
                                            CoordinatorStudentErasmusRepository coordinatorStudentErasmusRepository, LearningAgreementErasmusDetailRepository erasmusDetailRepository,
                                            CourseHostService courseHostService, CourseBilkentService courseBilkentService, OutGoingStudentErasmusRepository outGoingStudentErasmusRepository, LearningAgreementMapper agreementMapper, PreApprovalFormErasmusRepository preApprovalFormErasmusRepository, MobilityCourseFormService mobilityCourseFormService){
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

    public LearningAgreementErasmus createEmptyLearningAgreement(String subjectArea, String studyCycle, LanguageLevel languageLevel, String language,
                                                                 String hostName, String hostFullAddress, String hostErasmusCode,
                                                                 String hostContactName, String hostContactMail, String hostContactNumber, String hostContactFunction,
                                                                 int hostFacultyId) {
        LearningAgreementErasmus form = new LearningAgreementErasmus();
        OutGoingStudentErasmus student = form.getStudent();
        BilkentInformation bilkentInformation = new BilkentInformation();
        ReceivingInstitutionInformation hostInformation = new ReceivingInstitutionInformation();
        MobilityDetail mobility = new MobilityDetail();
        Address hostAddress = new Address();
        Address bilkentAddress = new Address();
        Faculty hostFaculty = new Faculty();
        Faculty bilkentFaculty = new Faculty();

        hostAddress.setFullAddress(hostFullAddress);

        bilkentAddress.setFullAddress("UNIVERSITELER MAH. BILKENT UNIVERSITESI - 06800 CANKAYA/ANKARA");
        hostFaculty.setId(hostFacultyId);
        hostFaculty.setName(FacultyName.ENGINEERING);

        bilkentFaculty.setId(0);
        bilkentFaculty.setName(FacultyName.ENGINEERING);

        mobility.setMobilityType(MobilityType.BEFORE);
        mobility.setStartDate(new Date());
        mobility.setMobilityCourseBilkent(findBilkentCoursesByStudent(student));
        mobility.setMobilityCourseHost(findHostCoursesByStudent(student));

        bilkentInformation.setName("Bilkent University");
        bilkentInformation.setAddress(bilkentAddress);
        bilkentInformation.setErasmusCode("ANKARA07");
        // contact person getting
        //findPreApprovalById(student).getBilkentCoordinator().getName()
        bilkentInformation.setContactPersonName("");
        bilkentInformation.setContactPersonEmail("");
        bilkentInformation.setContactPersonPhoneNumber("");
        bilkentInformation.setContactPersonFunction("");
        bilkentInformation.setFaculty(bilkentFaculty);
        bilkentInformation.setDepartment(DepartmentName.CS);

        hostInformation.setName(hostName);
        hostInformation.setAddress(hostAddress);
        hostInformation.setErasmusCode(hostErasmusCode);
        hostInformation.setContactPersonName(hostContactName);
        hostInformation.setContactPersonEmail(hostContactMail);
        hostInformation.setContactPersonPhoneNumber(hostContactNumber);
        hostInformation.setContactPersonFunction(hostContactFunction);
        hostInformation.setFaculty(hostFaculty);

        form.setStatus(Status.IN_PROCESS);
        form.setAcademicYear(academicYear);
        form.setSemester(semester);
        return erasmusRepository.save(form);
    }

    public LearningAgreementErasmus saveForm(LearningAgreementDTO form) throws Exception {
        LearningAgreementErasmus erasmusForm = createEmptyLearningAgreement(form.getSubjectArea(), form.getStudyCycle(), form.getLanguageLevel(), form.getLanguage(), form.getReceivingInstitutionInformation().getName(), form.getReceivingInstitutionInformation().getAddress().getFullAddress(),
                form.getReceivingInstitutionInformation().getErasmusCode(),form.getReceivingInstitutionInformation().getContactPersonName(),
                form.getReceivingInstitutionInformation().getContactPersonEmail(),form.getReceivingInstitutionInformation().getContactPersonPhoneNumber(), form.getReceivingInstitutionInformation().getContactPersonFunction(),
                form.getReceivingInstitutionInformation().getFaculty().getId());
        OutGoingStudentErasmus student = outGoingStudentErasmusRepository.findByStarsId(form.getStudentId());
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
            courseHosts.add(saveCourseHost(courseNames.get(i), credits.get(i)));
        }
        return courseHosts;
    }

    private List<CourseBilkent> saveAllBilkentCourses(List<String> courseNames, List<Double> credits) {
        List<CourseBilkent> courses = new ArrayList<>();
        for (int i = 0; i < courseNames.size(); i++) {
            courses.add(
                    saveCourseBilkent(courseNames.get(i), credits.get(i)));
        }
        return courses;
    }

    // saving bilkent courses
    private CourseBilkent saveCourseBilkent(String name, double credit){
        CourseBilkent course = new CourseBilkent();
        course.setName(name);
        course.setCreditECTS(credit);
        return courseBilkentService.save(course);
    }

    private MobilityCourseForm saveCourseBilkentBefore(String name, double credit) {
        MobilityCourseForm mobilityCourseForm = new MobilityCourseForm();
        CourseBilkent course = new CourseBilkent();
        MobilityDetail mobilityDetail = new MobilityDetail();
        mobilityDetail.setMobilityType(MobilityType.BEFORE);

        course.setName(name);
        course.setCreditECTS(credit);
        mobilityCourseForm.setCourseBilkent(course);
        mobilityCourseForm.setMobility(mobilityDetail);

        return mobilityCourseFormService.save(mobilityCourseForm);
    }

    private MobilityCourseForm saveCourseBilkentDuring(String name, double credit, boolean isAdded, String reason) {
        MobilityCourseForm mobilityCourseForm = new MobilityCourseForm();
        CourseBilkent course = new CourseBilkent();
        MobilityDetail mobilityDetail = new MobilityDetail();
        mobilityDetail.setMobilityType(MobilityType.DURING);

        course.setName(name);
        course.setCreditECTS(credit);
        mobilityCourseForm.setCourseBilkent(course);
        mobilityCourseForm.setMobility(mobilityDetail);
        mobilityCourseForm.setChanged(isAdded);
        mobilityCourseForm.setReasonOfChange(reason);

        return mobilityCourseFormService.save(mobilityCourseForm);
    }

    private MobilityCourseForm saveCourseBilkentAfter(String name, double credit, boolean wasCompleted, LetterGrade grade) {
        MobilityCourseForm mobilityCourseForm = new MobilityCourseForm();
        CourseBilkent course = new CourseBilkent();
        MobilityDetail mobilityDetail = new MobilityDetail();
        mobilityDetail.setMobilityType(MobilityType.AFTER);

        course.setName(name);
        course.setCreditECTS(credit);
        mobilityCourseForm.setCourseBilkent(course);
        mobilityCourseForm.setMobility(mobilityDetail);
        mobilityCourseForm.setWasCompleted(wasCompleted);
        mobilityCourseForm.setGrade(grade);

        return mobilityCourseFormService.save(mobilityCourseForm);
    }

    // saving host courses
    private CourseHost saveCourseHost(String name, double credit){
        CourseHost course = new CourseHost();
        course.setName(name);
        course.setCreditECTS(credit);
        return courseHostService.save(course);
    }

    private MobilityCourseForm saveCourseHostBefore(String name, double credit) {
        MobilityCourseForm mobilityCourseForm = new MobilityCourseForm();
        CourseHost course = new CourseHost();
        MobilityDetail mobilityDetail = new MobilityDetail();
        mobilityDetail.setMobilityType(MobilityType.BEFORE);

        course.setName(name);
        course.setCreditECTS(credit);
        mobilityCourseForm.setCourseHost(course);
        mobilityCourseForm.setMobility(mobilityDetail);

        return mobilityCourseFormService.save(mobilityCourseForm);
    }

    private MobilityCourseForm saveCourseHostDuring(String name, double credit, boolean isAdded, String reason) {
        MobilityCourseForm mobilityCourseForm = new MobilityCourseForm();
        CourseHost course = new CourseHost();
        MobilityDetail mobilityDetail = new MobilityDetail();
        mobilityDetail.setMobilityType(MobilityType.DURING);

        course.setName(name);
        course.setCreditECTS(credit);
        mobilityCourseForm.setCourseHost(course);
        mobilityCourseForm.setMobility(mobilityDetail);
        mobilityCourseForm.setChanged(isAdded);
        mobilityCourseForm.setReasonOfChange(reason);

        return mobilityCourseFormService.save(mobilityCourseForm);
    }

    private MobilityCourseForm saveCourseHostAfter(String name, double credit, boolean wasCompleted, LetterGrade grade) {
        MobilityCourseForm mobilityCourseForm = new MobilityCourseForm();
        CourseHost course = new CourseHost();
        MobilityDetail mobilityDetail = new MobilityDetail();
        mobilityDetail.setMobilityType(MobilityType.AFTER);

        course.setName(name);
        course.setCreditECTS(credit);
        mobilityCourseForm.setCourseHost(course);
        mobilityCourseForm.setMobility(mobilityDetail);
        mobilityCourseForm.setWasCompleted(wasCompleted);
        mobilityCourseForm.setGrade(grade);

        return mobilityCourseFormService.save(mobilityCourseForm);
    }

    public List<LearningAgreementDTO> getAllAgreements() {
        return agreementMapper.toLearningAgreementDTOList(erasmusRepository.findAll());
    }

    public LearningAgreementDTO reviewForm(ReviewFormRequestDTO request, int formId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        LearningAgreementErasmus agreement = erasmusRepository.findByStudent_Id(auth.getName());
        return agreementMapper.toLearningAgreementDTO(agreement);
    }

    public LearningAgreementDTO editForm(LearningAgreementDTO erasmusDTO) {
        // to-do
        return erasmusDTO;
    }

    public List<CourseBilkent> getBilkentCourseList(List<Integer> courseBilkentIds){
        List<CourseBilkent> courseBilkentList = new ArrayList<CourseBilkent>();

        for( int i = 0; i < courseBilkentIds.size(); i++){
            courseBilkentList.get(i).setId(courseBilkentIds.get(i));
        }
        return courseBilkentList;
    }

    public List<CourseHost> getHostCourseList(List<String> courseHostNames, List<Double> courseHostCredits){
        List<CourseHost> courseHostList = new ArrayList<CourseHost>();

        for( int i = 0; i < courseHostNames.size(); i++){
            courseHostList.get(i).setName(courseHostNames.get(i));
            courseHostList.get(i).setCreditECTS(courseHostCredits.get(i));
        }
        return courseHostList;
    }

    public PreApprovalFormErasmus findPreApprovalById(OutGoingStudentErasmus student){
        PreApprovalFormErasmus preApprovalForm = preApprovalFormErasmusRepository.findByStudentId(student.getStarsId());
        if (preApprovalForm != null)
            return preApprovalForm;
        else
            return null;
    }

    public List<MobilityCourseForm> findBilkentCoursesByStudent(OutGoingStudentErasmus student){
        PreApprovalFormErasmus preApprovalForm = findPreApprovalById(student);
        List<MobilityCourseForm> bilkentCourses = new ArrayList<>();
        //get course list
        return bilkentCourses;
    }

    public List<MobilityCourseForm> findHostCoursesByStudent(OutGoingStudentErasmus student){
        PreApprovalFormErasmus preApprovalForm = findPreApprovalById(student);
        List<MobilityCourseForm> hostCourses = new ArrayList<>();
        //get course list
        return hostCourses;
    }

    public LearningAgreementErasmus findLearningAgreementByStudent(OutGoingStudentErasmus student){
        LearningAgreementErasmus agreementForm = erasmusRepository.findByStudent_Id(student.getStarsId());
        if (agreementForm != null)
            return agreementForm;
        else
            return null;
    }

    public LearningAgreementErasmus findLearningAgreementByFormId(String Id){
        LearningAgreementErasmus agreementForm = erasmusRepository.findByFormId(Id);
        if (agreementForm != null)
            return agreementForm;
        else
            return null;
    }
}

