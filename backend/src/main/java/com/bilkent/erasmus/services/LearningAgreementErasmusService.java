package com.bilkent.erasmus.services;

import com.bilkent.erasmus.dtos.InitialApplicationDTO.LearningAgreementDTO;
import com.bilkent.erasmus.dtos.LearningAgreementInitialFieldsDTO;
import com.bilkent.erasmus.dtos.ReviewFormRequestDTO;
import com.bilkent.erasmus.embeddables.BilkentInformation;
import com.bilkent.erasmus.embeddables.ReceivingInstitutionInformation;
import com.bilkent.erasmus.enums.*;
import com.bilkent.erasmus.mappers.InitialApplicationMappper.LearningAgreementMapper;
import com.bilkent.erasmus.mappers.LearningAgreementEditMapper;
import com.bilkent.erasmus.models.applicationModels.PreApprovalForms.PreApprovalFormNew;
import com.bilkent.erasmus.models.applicationModels.learningAgreementForms.LearningAgreementErasmus;
import com.bilkent.erasmus.models.applicationModels.learningAgreementForms.MobilityCourseForm;
import com.bilkent.erasmus.models.compositeModels.MobilityDetail;
import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import com.bilkent.erasmus.models.universityModels.Faculty;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudent;
import com.bilkent.erasmus.repositories.CoordinatorStudentErasmusRepository;
import com.bilkent.erasmus.repositories.PartnerUniversityErasmusRepository;
import com.bilkent.erasmus.repositories.PreApprovalFormRepositories.PreApprovalFormRepositoryNew;
import com.bilkent.erasmus.repositories.applicationRepositories.LearningAgreementErasmusDetailRepository;
import com.bilkent.erasmus.repositories.applicationRepositories.LearningAgreementErasmusRepository;
import com.bilkent.erasmus.repositories.studentRepository.OutGoingStudentRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
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

    private final OutGoingStudentRepository outGoingStudentRepository;

    private final LearningAgreementMapper agreementMapper;

    private final PreApprovalFormRepositoryNew preApprovalFormErasmusRepository;

    private final MobilityCourseFormService mobilityCourseFormService;

    private final LearningAgreementEditMapper learningAgreementEditMapper;

    private LearningAgreementErasmusService(LearningAgreementErasmusRepository formErasmusRepository, PartnerUniversityErasmusRepository universityErasmusRepository,
                                            CoordinatorStudentErasmusRepository coordinatorStudentErasmusRepository, LearningAgreementErasmusDetailRepository erasmusDetailRepository,
                                            CourseHostService courseHostService, CourseBilkentService courseBilkentService,
                                            OutGoingStudentRepository outGoingStudentRepository, LearningAgreementMapper agreementMapper, PreApprovalFormRepositoryNew preApprovalFormErasmusRepository, MobilityCourseFormService mobilityCourseFormService, LearningAgreementEditMapper learningAgreementEditMapper){
        this.erasmusRepository = formErasmusRepository;
        this.universityErasmusRepository = universityErasmusRepository;
        this.coordinatorStudentErasmusRepository = coordinatorStudentErasmusRepository;
        this.erasmusDetailRepository = erasmusDetailRepository;
        this.courseHostService = courseHostService;
        this.courseBilkentService = courseBilkentService;
        this.outGoingStudentRepository = outGoingStudentRepository;
        this.agreementMapper = agreementMapper;
        this.preApprovalFormErasmusRepository = preApprovalFormErasmusRepository;
        this.mobilityCourseFormService = mobilityCourseFormService;
        this.learningAgreementEditMapper = learningAgreementEditMapper;
    }

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

    public LearningAgreementInitialFieldsDTO getInitialFieldValues(){
        String starsId = SecurityContextHolder.getContext().getAuthentication().getName();
        OutGoingStudent student = outGoingStudentRepository.findByStarsId(starsId).orElseThrow(() -> new EntityNotFoundException("No student found"));


        BilkentInformation bilkentInformation = new BilkentInformation();
        Faculty bilkentFaculty = new Faculty();

        bilkentFaculty.setId(0);
        bilkentFaculty.setName(FacultyName.ENGINEERING);

        bilkentInformation.setNameBilkent("Bilkent University");
        bilkentInformation.setAddressBilkent("UNIVERSITELER MAH. BILKENT UNIVERSITESI - 06800 CANKAYA/ANKARA");
        bilkentInformation.setErasmusCodeBilkent("ANKARA07");
        bilkentInformation.setCountryCodeBilkent("Turkey, TR");

        try{
            if(findPreApprovalById(student).getExchangeCoordinator() != null){
                bilkentInformation.setContactPersonFirstNameBilkent(findPreApprovalById(student).getExchangeCoordinator().getFirstName());
                bilkentInformation.setContactPersonLastNameBilkent(findPreApprovalById(student).getExchangeCoordinator().getLastName());
                bilkentInformation.setContactPersonEmailBilkent(findPreApprovalById(student).getExchangeCoordinator().getContactInformation().getEmailUniversity());
                bilkentInformation.setContactPersonPhoneNumberBilkent(findPreApprovalById(student).getExchangeCoordinator().getContactInformation().getPhoneNumberWork());
                bilkentInformation.setContactPersonFunctionBilkent(findPreApprovalById(student).getExchangeCoordinator().getPermission().toString());
            }
        }catch(NullPointerException ex){
            // exchange coordinator will be empty
        }
        bilkentInformation.setFacultyBilkent(bilkentFaculty);
        bilkentInformation.setDepartmentBilkent(student.getDepartmentName());


        List<MobilityCourseForm> courseList = findCoursesByStudent(student);


        LearningAgreementInitialFieldsDTO response = LearningAgreementInitialFieldsDTO.builder()
                .outGoingStudent(student)
                .bilkentInformation(bilkentInformation)
                .mobilityCourseForms(courseList).build();
        return response;

    }

    public LearningAgreementErasmus createEmptyLearningAgreement(String subjectArea, String studyCycle, LanguageLevel languageLevel, String language,
                                                                 String hostName, String hostFullAddress, String hostErasmusCode, String hostCountryCode,
                                                                 String hostContactFirstName, String hostContactLastName, String hostContactMail, String hostContactNumber, String hostContactFunction,
                                                                 int hostFacultyId, DepartmentName departmentHost) {
        LearningAgreementErasmus form = new LearningAgreementErasmus();
        String starsId = SecurityContextHolder.getContext().getAuthentication().getName();
        OutGoingStudent student = outGoingStudentRepository.findByStarsId(starsId).orElseThrow(() -> new EntityNotFoundException("No student found"));
        BilkentInformation bilkentInformation = new BilkentInformation();
        ReceivingInstitutionInformation hostInformation = new ReceivingInstitutionInformation();

        MobilityDetail beforeMobility = new MobilityDetail();
        MobilityDetail duringMobility = new MobilityDetail();
        MobilityDetail afterMobility = new MobilityDetail();

        beforeMobility.setMobilityType(MobilityType.BEFORE);
        beforeMobility.setStartDate(new Date());
        beforeMobility.setMobilityCourseForms(findCoursesByStudent(student));

        duringMobility.setMobilityType(MobilityType.DURING);
        afterMobility.setMobilityType(MobilityType.AFTER);

        Faculty hostFaculty = new Faculty();
        Faculty bilkentFaculty = new Faculty();
        List<MobilityDetail> mobilityDetailList = new ArrayList<>();

        mobilityDetailList.add(beforeMobility);
        mobilityDetailList.add(duringMobility);
        mobilityDetailList.add(afterMobility);
        hostFaculty.setId(hostFacultyId);
        hostFaculty.setName(FacultyName.ENGINEERING);

        bilkentFaculty.setId(0);
        bilkentFaculty.setName(FacultyName.ENGINEERING);

        bilkentInformation.setNameBilkent("Bilkent University");
        bilkentInformation.setAddressBilkent("UNIVERSITELER MAH. BILKENT UNIVERSITESI - 06800 CANKAYA/ANKARA");
        bilkentInformation.setErasmusCodeBilkent("ANKARA07");
        bilkentInformation.setCountryCodeBilkent("Turkey, TR");

        bilkentInformation.setContactPersonFirstNameBilkent(findPreApprovalById(student).getExchangeCoordinator().getFirstName());
        bilkentInformation.setContactPersonLastNameBilkent(findPreApprovalById(student).getExchangeCoordinator().getLastName());
        bilkentInformation.setContactPersonEmailBilkent(findPreApprovalById(student).getExchangeCoordinator().getContactInformation().getEmailUniversity());
        bilkentInformation.setContactPersonPhoneNumberBilkent(findPreApprovalById(student).getExchangeCoordinator().getContactInformation().getPhoneNumberWork());
        bilkentInformation.setContactPersonFunctionBilkent(findPreApprovalById(student).getExchangeCoordinator().getPermission().toString());
        bilkentInformation.setFacultyBilkent(bilkentFaculty);
        bilkentInformation.setDepartmentBilkent(student.getDepartmentName());

        hostInformation.setNameHost(hostName);
        hostInformation.setAddressHost(hostFullAddress);
        hostInformation.setErasmusCodeHost(hostErasmusCode);
        hostInformation.setContactPersonFirstNameHost(hostContactFirstName);
        hostInformation.setContactPersonLastNameHost(hostContactLastName);
        hostInformation.setContactPersonEmailHost(hostContactMail);
        hostInformation.setContactPersonPhoneNumberHost(hostContactNumber);
        hostInformation.setContactPersonFunctionHost(hostContactFunction);
        hostInformation.setFacultyHost(hostFaculty);
        hostInformation.setDepartmentHost(departmentHost);
        hostInformation.setCountryCodeHost(hostCountryCode);

        form.setStudent(student);
        form.setStatus(Status.IN_PROCESS);
        form.setMobilityDetailList(mobilityDetailList);
        form.setSubjectArea(subjectArea);
        form.setStudyCycle(studyCycle);
        form.setLanguage(language);
        form.setLanguageLevel(languageLevel);
        form.setBilkentInformation(bilkentInformation);
        form.setReceivingInstitutionInformation(hostInformation);
        form.setSemester(findPreApprovalById(student).getSemester());
        form.setAcademicYear(findPreApprovalById(student).getAcademicYear());

        return erasmusRepository.save(form);
    }

    public LearningAgreementErasmus saveForm(LearningAgreementDTO form) throws Exception {
        LearningAgreementErasmus erasmusForm = createEmptyLearningAgreement(form.getSubjectArea(), form.getStudyCycle(), form.getLanguageLevel(), form.getLanguage(), form.getReceivingInstitutionInformation().getNameHost(), form.getReceivingInstitutionInformation().getAddressHost(),
                form.getReceivingInstitutionInformation().getErasmusCodeHost(),form.getReceivingInstitutionInformation().getCountryCodeHost(),form.getReceivingInstitutionInformation().getContactPersonFirstNameHost(), form.getReceivingInstitutionInformation().getContactPersonLastNameHost(),
                form.getReceivingInstitutionInformation().getContactPersonEmailHost(),form.getReceivingInstitutionInformation().getContactPersonPhoneNumberHost(), form.getReceivingInstitutionInformation().getContactPersonFunctionHost(),
                form.getReceivingInstitutionInformation().getFacultyHost().getId(),form.getReceivingInstitutionInformation().getDepartmentHost() );
        OutGoingStudent student = outGoingStudentRepository.findByStarsId(form.getStudentId()).orElseThrow(() -> new EntityNotFoundException("No student found"));

        erasmusForm.setStudent(student);

        return erasmusForm;
    }

/*  public List<LearningAgreementErasmus> retrieveAgreements(MobilityDetail mobility) {

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

       private List<LearningAgreementErasmus> getAgreementsByType(MobilityType type) {
        List<LearningAgreementErasmus> agreementList = null;
        agreementList = new ArrayList<LearningAgreementErasmus>(erasmusRepository.findByMobilityDetail(type));
        agreementList.addAll(erasmusRepository.findByMobilityDetail(type));
        return agreementList;
    }*/


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
        course.setName(name);
        course.setCreditECTS(credit);
        mobilityCourseForm.setCourseBilkent(course);

        return mobilityCourseFormService.save(mobilityCourseForm);
    }

    private MobilityCourseForm saveCourseBilkentDuring(String name, double credit, boolean isAdded, String reason) {
        MobilityCourseForm mobilityCourseForm = new MobilityCourseForm();
        CourseBilkent course = new CourseBilkent();

        course.setName(name);
        course.setCreditECTS(credit);
        mobilityCourseForm.setCourseBilkent(course);
        mobilityCourseForm.setChanged(isAdded);
        mobilityCourseForm.setReasonOfChange(reason);

        return mobilityCourseFormService.save(mobilityCourseForm);
    }

    private MobilityCourseForm saveCourseBilkentAfter(String name, double credit, boolean wasCompleted, LetterGrade grade) {
        MobilityCourseForm mobilityCourseForm = new MobilityCourseForm();
        CourseBilkent course = new CourseBilkent();

        course.setName(name);
        course.setCreditECTS(credit);
        mobilityCourseForm.setCourseBilkent(course);
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

        course.setName(name);
        course.setCreditECTS(credit);
        mobilityCourseForm.setCourseHost(course);

        return mobilityCourseFormService.save(mobilityCourseForm);
    }

    private MobilityCourseForm saveCourseHostDuring(String name, double credit, boolean isAdded, String reason) {
        MobilityCourseForm mobilityCourseForm = new MobilityCourseForm();
        CourseHost course = new CourseHost();

        course.setName(name);
        course.setCreditECTS(credit);
        mobilityCourseForm.setCourseHost(course);
        mobilityCourseForm.setChanged(isAdded);
        mobilityCourseForm.setReasonOfChange(reason);

        return mobilityCourseFormService.save(mobilityCourseForm);
    }

    private MobilityCourseForm saveCourseHostAfter(String name, double credit, boolean wasCompleted, LetterGrade grade) {
        MobilityCourseForm mobilityCourseForm = new MobilityCourseForm();
        CourseHost course = new CourseHost();

        course.setName(name);
        course.setCreditECTS(credit);
        mobilityCourseForm.setCourseHost(course);
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

    public LearningAgreementDTO editForm(int id, LearningAgreementDTO erasmusDTO) {
        LearningAgreementErasmus agreementForm = new LearningAgreementErasmus();
        try {
            if (erasmusRepository.findById(id) != null) {
                agreementForm = erasmusRepository.findById(id);

                if (agreementForm.getStatus().equals(Status.IN_PROCESS)) {
                    log.info(agreementForm.toString());
                    learningAgreementEditMapper.updateLearningAgreementFromDTO(erasmusDTO, agreementForm);
                }
            }
        } catch(NullPointerException ex){
            // learning agreement is null
        }

        return agreementMapper.toLearningAgreementDTO(agreementForm);
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

    public PreApprovalFormNew findPreApprovalById(OutGoingStudent student){
        PreApprovalFormNew preApprovalForm = preApprovalFormErasmusRepository.findByStudent(student);
        if (preApprovalForm != null)
            return preApprovalForm;
        else
            return null;
    }

    public List<MobilityCourseForm> findCoursesByStudent(OutGoingStudent student){
        PreApprovalFormNew preApprovalForm = findPreApprovalById(student);
        List<MobilityCourseForm> courses = new ArrayList<>();

        for (int i=0; i<preApprovalForm.getForms().size(); i++) {
            courses.get(i).setCourseBilkent(preApprovalForm.getForms().get(i).getCourseBilkent());
            courses.get(i).setCourseHost(preApprovalForm.getForms().get(i).getCourseHost());
            courses.get(i).setId(preApprovalForm.getForms().get(i).getId());
        }
        return courses;
    }

    public LearningAgreementErasmus findLearningAgreementByStudent(OutGoingStudent student){
        LearningAgreementErasmus agreementForm = erasmusRepository.findByStudent_Id(student.getStarsId());
        if (agreementForm != null)
            return agreementForm;
        else
            return null;
    }

    public LearningAgreementErasmus findLearningAgreementByFormId(int Id){
        LearningAgreementErasmus agreementForm = erasmusRepository.findById(Id);
        if (agreementForm != null)
            return agreementForm;
        else
            return null;
    }
}

