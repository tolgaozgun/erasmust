package com.bilkent.erasmus.services.preApprovalService;

import com.bilkent.erasmus.dtos.CourseReviewEditDTO;

import com.bilkent.erasmus.enums.ToDoType;

import com.bilkent.erasmus.models.FileData;
import com.bilkent.erasmus.models.ToDoItem;
import com.bilkent.erasmus.models.applicationModels.PreApprovalForms.CourseReviewFormNew;
import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import com.bilkent.erasmus.repositories.CourseBilkentRepository;
import com.bilkent.erasmus.repositories.CourseHostRepository;
import com.bilkent.erasmus.repositories.PreApprovalFormRepositories.CourseReviewFormRepositoryNew;
import com.bilkent.erasmus.repositories.ToDoItemRepository;
//import com.bilkent.erasmus.services.StorageService;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
public class CourseReviewFormServiceNew {

    private final CourseReviewFormRepositoryNew courseReviewFormRepository;

    private final CourseHostRepository courseHostRepository;

    private final CourseBilkentRepository courseBilkentRepository;


    //private final StorageService storageService;
    private final ToDoItemRepository toDoItemRepository;

    public CourseReviewFormServiceNew(CourseReviewFormRepositoryNew courseReviewFormRepository
            , CourseHostRepository courseHostRepository
            , CourseBilkentRepository courseBilkentRepository
            ,  ToDoItemRepository toDoItemRepository) {
        this.courseReviewFormRepository = courseReviewFormRepository;
        this.courseHostRepository = courseHostRepository;
        this.courseBilkentRepository = courseBilkentRepository;
        //this.storageService = storageService;
        this.toDoItemRepository = toDoItemRepository;

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
      //  form.setFiles(saveMultipleFiles(files));
        return courseReviewFormRepository.save(form);
    }
/*

    private FileData saveFile(MultipartFile file) {
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

    private List<FileData> saveMultipleFiles(MultipartFile[] files) {
        return Arrays.asList(files)
                .stream()
                .map(file -> saveFile(file))
                .collect(Collectors.toList());
    }*/



}
