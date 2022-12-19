package com.bilkent.erasmus.services.preApprovalService;

import com.bilkent.erasmus.ErasmusApplication;
import com.bilkent.erasmus.dtos.CourseReviewFormCreation;
import com.bilkent.erasmus.dtos.CourseReviewFormResponseDTO;
import com.bilkent.erasmus.dtos.EvaluationDTO;
import com.bilkent.erasmus.dtos.PreApprovalFormDtos.PreApprovalFormDTONew;
import com.bilkent.erasmus.dtos.PreApprovalFormEditDTO;
import com.bilkent.erasmus.enums.CourseApprovalStatus;
import com.bilkent.erasmus.enums.SemesterOfferings;
import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.enums.ToDoType;
import com.bilkent.erasmus.exceptions.PreApprovalFormNotCompletedException;
import com.bilkent.erasmus.mappers.PreApprovalFormEditMapper;
import com.bilkent.erasmus.mappers.PreApprovalFormMapper.PreApprovalFormErasmusMapper;
import com.bilkent.erasmus.models.ToDoItem;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.ApplicationErasmus;
import com.bilkent.erasmus.models.applicationModels.PreApprovalForms.CourseReviewFormNew;
import com.bilkent.erasmus.models.applicationModels.PreApprovalForms.PreApprovalFormNew;
import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import com.bilkent.erasmus.models.universityModels.PartnerUniversity;
import com.bilkent.erasmus.models.universityModels.PartnerUniversityErasmus;
import com.bilkent.erasmus.models.userModels.AdministrativeModels.ExchangeCoordinator;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudent;
import com.bilkent.erasmus.repositories.CourseBilkentRepository;
import com.bilkent.erasmus.repositories.ExchangeCoordinatorRepository;
import com.bilkent.erasmus.repositories.PreApprovalFormRepositories.PreApprovalFormRepositoryNew;
import com.bilkent.erasmus.repositories.ToDoItemRepository;
import com.bilkent.erasmus.repositories.applicationRepositories.ApplicationErasmusRepository;
import com.bilkent.erasmus.repositories.studentRepository.OutGoingStudentRepository;
import com.bilkent.erasmus.services.CourseHostService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class PreApprovalFormNewService {

    private final PreApprovalFormErasmusMapper preApprovalFormErasmusMapper;

    private final PreApprovalFormRepositoryNew preApprovalFormRepository;

    private final CourseHostService courseHostService;

    private final CourseBilkentRepository courseBilkentRepository;

    private final CourseReviewFormServiceNew courseReviewFormService;

    private final OutGoingStudentRepository outGoingStudentRepository;

    private final ApplicationErasmusRepository applicationErasmusRepository;

    private final PreApprovalFormEditMapper editMapper;

    private final ToDoItemRepository toDoItemRepository;

    private final ExchangeCoordinatorRepository exchangeCoordinatorRepository;

    public PreApprovalFormNewService(PreApprovalFormErasmusMapper preApprovalFormErasmusMapper
            , PreApprovalFormRepositoryNew preApprovalFormRepository
            , CourseHostService courseHostService
            , CourseBilkentRepository courseBilkentRepository
            , CourseReviewFormServiceNew courseReviewFormService
            , OutGoingStudentRepository outGoingStudentRepository
            , ApplicationErasmusRepository erasmusRepository
            , PreApprovalFormEditMapper editMapper, ToDoItemRepository toDoItemRepository
            , ExchangeCoordinatorRepository exchangeCoordinatorRepository) {
        this.preApprovalFormErasmusMapper = preApprovalFormErasmusMapper;
        this.preApprovalFormRepository = preApprovalFormRepository;
        this.courseHostService = courseHostService;
        this.courseBilkentRepository = courseBilkentRepository;
        this.courseReviewFormService = courseReviewFormService;
        this.outGoingStudentRepository = outGoingStudentRepository;
        this.applicationErasmusRepository = erasmusRepository;
        this.editMapper = editMapper;
        this.toDoItemRepository = toDoItemRepository;
        this.exchangeCoordinatorRepository = exchangeCoordinatorRepository;
    }

    public PreApprovalFormNew saveForm(PreApprovalFormDTONew form) throws Exception {
        PreApprovalFormNew preApprovalForm = PreApprovalFormNew.builder()
                .forms(createCourseReviewFormAll(form.getForms()))
                .date(System.currentTimeMillis())
                .build();
        inheritInfoFromApplication(preApprovalForm);
        ToDoItem todo = new ToDoItem();
        todo.setType(ToDoType.PREAPPROVAL);
        preApprovalFormRepository.save(preApprovalForm);
        todo.setKey(preApprovalForm.getId());
        todo.setTitle("Review preapproval");
        toDoItemRepository.save(todo);
        return preApprovalForm;
    }

    private void activateAutomaticCheck(CourseReviewFormNew courseReviewFormNew,
                                        PartnerUniversityErasmus partnerUniversity) {

    }

    private CourseHost createHostCourse(CourseReviewFormCreation formCreation) {
        return courseReviewFormService.createCourseHost(formCreation.getCourseHostName(), formCreation.getCourseHostCredit());
    }

    private List<CourseHost> createHostCourseAll(List<CourseReviewFormCreation> list) {
        List<CourseHost> copyList = new ArrayList<>();
        for (CourseReviewFormCreation form : list) {
            copyList.add(createHostCourse(form));
        }
        return copyList;
    }

    private CourseReviewFormNew createCourseReviewForm(CourseReviewFormCreation formCreation) throws Exception {
        CourseBilkent courseBilkent = courseBilkentRepository.findById(formCreation.getCourseBilkentId())
                        .orElseThrow(() -> new Exception("no course is found"));
        CourseHost courseHost = createHostCourse(formCreation);
        return courseReviewFormService.createForm(courseBilkent, courseHost, courseHost.getCreditECTS());
    }

    public List<CourseReviewFormNew> createCourseReviewFormAll(List<CourseReviewFormCreation> list) throws Exception {
        List<CourseReviewFormNew> copyList = new ArrayList<>();
        for (CourseReviewFormCreation form : list) {
            copyList.add(createCourseReviewForm(form));
        }
        return copyList;
    }

    private void inheritInfoFromApplication(PreApprovalFormNew preApprovalFormNew) {
        ApplicationErasmus erasmusApplication = retrieveApplicationFromStudentId();
        preApprovalFormNew.setStatus(Status.IN_PROCESS);
        preApprovalFormNew.setSemester(erasmusApplication.getSemester());
        preApprovalFormNew.setAcademicYear(erasmusApplication.getAcademicYear());
        preApprovalFormNew.setStudent(erasmusApplication.getStudent());
        preApprovalFormNew.setExchangeCoordinator(retrieveApplicationFromStudentId().getCoordinator());
    }

    private int findStudentId() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        OutGoingStudent student = outGoingStudentRepository.findByStarsId(auth.getName())
                .orElseThrow(()-> new EntityNotFoundException("Outgoing student is not found with id: " + findStudentId()));
        return student.getId();
    }

    private ApplicationErasmus retrieveApplicationFromStudentId() {
        ApplicationErasmus application = applicationErasmusRepository.findByStudent_Id(findStudentId());
        if (application != null)
            return application;
        else
            throw new EntityNotFoundException("Application erasmus is not found with id: " + findStudentId());
    }

    public PreApprovalFormDTONew editForm(int id, PreApprovalFormEditDTO form) throws Exception {
        PreApprovalFormNew preApprovalForm = preApprovalFormRepository.findById(id)
                .orElseThrow(()-> new Exception("Application with ID " + id + "does not exist"));
        if (preApprovalForm.getStatus().equals(Status.IN_PROCESS)) {
            log.info(preApprovalForm.toString());
            form.setId(id);
            editMapper.updatePreApprovalFormNewFromDTO(form, preApprovalForm);
            log.info("reqeuest payload: " + form.getForms().get(0).getCourseHost().getName());
            log.info(preApprovalForm.getForms().get(0).getCourseHost().getName());
        }
        return preApprovalFormErasmusMapper.toPreApprovalFormDTONew(preApprovalForm);

    }
    public List<PreApprovalFormDTONew> getAllPreapprovalStudent() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        try {
            List <PreApprovalFormNew> preApprovalFormNews = preApprovalFormRepository.findAllByStudent_StarsId(auth.getName());
            return preApprovalFormErasmusMapper.toPreApprovalFormDTONewList(preApprovalFormNews);

        }catch(EntityNotFoundException e) {
            log.info("Student doesn't have a preapproval form");
            return null;
        }
    }

    public List<PreApprovalFormDTONew> getAllPreapproval() {
        return preApprovalFormErasmusMapper.toPreApprovalFormDTONewList(preApprovalFormRepository.findAll());
    }


    public List<CourseReviewFormResponseDTO> gelAllReviewFormsForCourseCoordinator() {
        String starsId = getStarsId();
        List<CourseReviewFormNew> reviewForms = new ArrayList<>();
        List<PreApprovalFormNew> copyList = preApprovalFormRepository.findAll();
        List<CourseReviewFormResponseDTO> responseList = new ArrayList<>();
        for (PreApprovalFormNew form : copyList) {
            for (CourseReviewFormNew reviewForm : form.getForms()) {
                if (reviewForm.getCourseBilkent().getCourseCoordinator().getStarsId().equals(starsId)
                && reviewForm.getCourseBilkent().getIsMustCourse()) {
                    responseList.add(getCourseReviewFormForStudent(reviewForm.getId()));
                    reviewForms.add(reviewForm);
                }
            }
        }
        return responseList;
    }

    private String getStarsId() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return auth.getName();
    }
    public List<CourseReviewFormNew> getAllReviewFormsForExchangeCoordinator() {
        String starsId = getStarsId();
        log.info("exchange coordinator id: " + starsId);
        List<CourseReviewFormNew> reviewForms = new ArrayList<>();
        List<PreApprovalFormNew> copyList = preApprovalFormRepository.findAll();
        for (PreApprovalFormNew form : copyList) {
            for (CourseReviewFormNew reviewForm : form.getForms()) {
                if (form.getExchangeCoordinator().getStarsId().equals(starsId)
                && !reviewForm.getCourseBilkent().getIsMustCourse()) {
                    reviewForms.add(reviewForm);
                }
            }
        }
        return reviewForms;
    }

    public PreApprovalFormNew getPreapprovalByIdForStudent(int id) {
        return preApprovalFormRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("no pre approval form is found"));
    }

    public PreApprovalFormNew getStudentForm() throws Exception {
        return preApprovalFormRepository.findByStatusAndStudent_Id(Status.IN_PROCESS, findStudentId())
                .orElseThrow(() -> new Exception("no form is found"));
    }

    public List<CourseReviewFormResponseDTO> getAllCourseReviewFormsForStudent() throws Exception {
        PreApprovalFormNew preApprovalForm = getStudentForm();
        List<CourseReviewFormResponseDTO> responseList = new ArrayList<>();
        for (CourseReviewFormNew form : preApprovalForm.getForms()) {
            responseList.add(getCourseReviewFormForStudent(form.getId()));
        }
        return responseList;
    }
    public CourseReviewFormResponseDTO getCourseReviewFormForStudent(int id) {
        PreApprovalFormNew form = preApprovalFormRepository.findByFormsId(id);
        CourseReviewFormNew formReview = courseReviewFormService.getCourseReviewFormByIdForStudent(id);
        CourseReviewFormResponseDTO reviewForm = CourseReviewFormResponseDTO.builder()
                .id(id)
                .courseBilkent(formReview.getCourseBilkent())
                .courseHost(formReview.getCourseHost())
                .files(formReview.getFiles())
                .status(formReview.getStatus())
                .coordinatorReply(formReview.getCoordinatorReply())
                .requirements(formReview.getRequirements())
                .date(formReview.getDate())
                .academicYear(form.getAcademicYear())
                .semester(form.getSemester())
                .firstName(form.getStudent().getFirstName())
                .lastName(form.getStudent().getLastName()).build();

        log.info(form.getStudent().getFirstName());
        return reviewForm;
    }

    public PreApprovalFormNew evaluate(int id, EvaluationDTO evaluation) throws PreApprovalFormNotCompletedException {
        PreApprovalFormNew form = preApprovalFormRepository.findById(id)
                .orElseThrow( () -> new EntityNotFoundException("there is no approval form with id " + id));
        if (evaluation.isFlag()) {
            for (CourseReviewFormNew reviewForm : form.getForms()) {
                if (!reviewForm.getStatus().equals(CourseApprovalStatus.APPROVED)) {
                    throw new PreApprovalFormNotCompletedException("cannot approve," +
                            " there is at least one course need to be approved", reviewForm.getCourseHost().getName());
                }
            }
            form.setStatus(Status.APPROVED);
        }
        else {
            form.setStatus(Status.REJECTED);
        }
        return preApprovalFormRepository.save(form);
    }

    // todo throw generic exception
    public List<PreApprovalFormNew> getAllPreApprovalFormsForExchangeCoordinatorToEvaluate() {
        String starsId = getStarsId();
        exchangeCoordinatorRepository.findByStarsId(starsId).
                orElseThrow(() -> new EntityNotFoundException("there is no exchange coordinator with stars id: " + starsId));
        List<PreApprovalFormNew> preApprovalFormLists = preApprovalFormRepository.findAllByExchangeCoordinator_StarsId(starsId);
        return preApprovalFormLists;
    }

    // todo throw generic exception
    public PreApprovalFormNew getPreApprovalFormForExchangeCoordinatorToEvaluate(int id) {
        String starsId = getStarsId();
        exchangeCoordinatorRepository.findByStarsId(starsId).
                orElseThrow(() -> new EntityNotFoundException("there is no exchange coordinator with stars id: " + starsId));
        PreApprovalFormNew preApprovalForm = preApprovalFormRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("there is no approval form with id : " + id));
        return preApprovalForm;
    }
}

// todo --> coordinator add reply
