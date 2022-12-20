package com.bilkent.erasmus.services.preApprovalService;

import com.bilkent.erasmus.dtos.CourseReviewEditDTO;

import com.bilkent.erasmus.dtos.CourseReviewFormNewDTO;
import com.bilkent.erasmus.dtos.EvaluationDTO;
import com.bilkent.erasmus.dtos.ReplyDTO;
import com.bilkent.erasmus.enums.CourseApprovalStatus;
import com.bilkent.erasmus.enums.ToDoType;

import com.bilkent.erasmus.models.FileData;
import com.bilkent.erasmus.models.ToDoItem;
import com.bilkent.erasmus.models.applicationModels.PreApprovalForms.CourseReviewFormNew;
import com.bilkent.erasmus.models.applicationModels.courseReviewForms.CourseReviewForm;
import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import com.bilkent.erasmus.repositories.CourseBilkentRepository;
import com.bilkent.erasmus.repositories.CourseHostRepository;
import com.bilkent.erasmus.repositories.PreApprovalFormRepositories.CourseReviewFormRepositoryNew;
import com.bilkent.erasmus.repositories.ToDoItemRepository;
import com.bilkent.erasmus.repositories.applicationRepositories.PreApprovalFormRepository;
import com.bilkent.erasmus.services.StorageService;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.persistence.EntityNotFoundException;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
public class CourseReviewFormServiceNew {
    private final CourseReviewFormRepositoryNew courseReviewFormRepository;
    private final CourseHostRepository courseHostRepository;
    private final CourseBilkentRepository courseBilkentRepository;
    private final StorageService storageService;
    private final ToDoItemRepository toDoItemRepository;
    private final PreApprovalFormRepository preApprovalFormRepository;

    public CourseReviewFormServiceNew(CourseReviewFormRepositoryNew courseReviewFormRepository
            , CourseHostRepository courseHostRepository
            , CourseBilkentRepository courseBilkentRepository
            , StorageService storageService, ToDoItemRepository toDoItemRepository
            , PreApprovalFormRepository preApprovalFormRepository) {
        this.courseReviewFormRepository = courseReviewFormRepository;
        this.courseHostRepository = courseHostRepository;
        this.courseBilkentRepository = courseBilkentRepository;
        this.storageService = storageService;
        this.toDoItemRepository = toDoItemRepository;

        this.preApprovalFormRepository = preApprovalFormRepository;
    }

    public CourseReviewFormNew createForm(CourseBilkent courseBilkent, CourseHost courseHost
            ,double hostCourseCredit) {
        CourseReviewFormNew courseReviewForm = CourseReviewFormNew.builder()
                .courseBilkent(courseBilkent)
                .courseHost(courseHost)
                .build();
        courseReviewFormRepository.save(courseReviewForm);
        ToDoItem todo = new ToDoItem();
        todo.setType(ToDoType.COURSE_REVIEW);
        todo.setKey(courseReviewForm.getId());
        todo.setTitle("Review this course review by ");
        toDoItemRepository.save(todo);
        return courseReviewForm;
    }

    public CourseHost createCourseHost(String courseName, double courseCredit) {
        CourseHost courseHost = CourseHost.courseHostBuilder()
                .name(courseName)
                .creditECTS(courseCredit)
                .build();
        return courseHostRepository.save(courseHost);
    }

    public CourseReviewFormNew editForm(CourseReviewEditDTO fillRequest, MultipartFile[] files) throws Exception {
        CourseReviewFormNew form = courseReviewFormRepository.findById(fillRequest.getFormId())
                .orElseThrow(() -> new Exception("no form is found"));
        form.setRequirements(fillRequest.getRequirements());
        form.setFiles(saveMultipleFiles(files));
        return courseReviewFormRepository.save(form);
    }


    public FileData saveFile(MultipartFile file) {
        String fileName = storageService.storeFile(file);

        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path(fileName)
                .toUriString();

        FileData fileData = FileData.builder()
                .name(fileName)
                .url(fileDownloadUri)
                .fileType(file.getContentType())
                .build();

        return fileData;
    }

    public MultipartFile saveFileAllTogether(MultipartFile file) throws IOException {
        String description = file.getResource().getDescription();
        return null;
    }

    private List<FileData> saveMultipleFiles(MultipartFile[] files) {
        return Arrays.asList(files)
                .stream()
                .map(file -> saveFile(file))
                .collect(Collectors.toList());
    }

    public CourseReviewFormNew accept(int id){
        CourseReviewFormNew courseReviewFormNew = courseReviewFormRepository
                .findById(id).orElseThrow(() -> new EntityNotFoundException("Course review form doesn't exist"));
        courseReviewFormNew.setStatus(CourseApprovalStatus.APPROVED);
        courseReviewFormRepository.save(courseReviewFormNew);
        return courseReviewFormNew;
    }

    public CourseReviewFormNew reject(int id){
        CourseReviewFormNew courseReviewFormNew = courseReviewFormRepository
                .findById(id).orElseThrow(() -> new EntityNotFoundException("Course review form doesn't exist"));
        courseReviewFormNew.setStatus(CourseApprovalStatus.DECLINED);
        courseReviewFormRepository.save(courseReviewFormNew);
        return courseReviewFormNew;
    }


    public List<CourseReviewFormNew> getAllFormsForStudent() {

        return null;
    }


    // todo -->  add exception
    public CourseReviewFormNew getCourseReviewFormByIdForStudent(int id) {
        CourseReviewFormNew courseReviewForm = courseReviewFormRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("course review form not found with id: " + id));
        return courseReviewForm;
    }

    public CourseReviewFormNew evaluateCourseReview(int id, EvaluationDTO evaluation) {
        CourseReviewFormNew courseReviewForm = courseReviewFormRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("course review form not found with id: " + id));
        if (evaluation.isFlag())
            courseReviewForm.setStatus(CourseApprovalStatus.APPROVED);
        else
            courseReviewForm.setStatus(CourseApprovalStatus.DECLINED);
        return courseReviewForm;
    }

    private boolean approveCourseAutomatically(int CourseHostId) {
        return false;
    }

    private boolean iterateAndCheckHostCourses() {
        return false;
    }

    // todo --> add not found exceptions, handle null string
    public CourseReviewFormNew replyCourseReviewForm(int id, ReplyDTO replyDTO) throws Exception {
        CourseReviewFormNew courseReviewFormNew = courseReviewFormRepository.findById(id).
                orElseThrow( () -> new Exception("course review form is not found with id: " + id));
        courseReviewFormNew.setCoordinatorReply(replyDTO.getReply());
        return courseReviewFormRepository.save(courseReviewFormNew);
    }
}
