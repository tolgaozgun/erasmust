package com.bilkent.erasmus.controllers;

import com.bilkent.erasmus.dtos.CourseReviewEditDTO;
import com.bilkent.erasmus.dtos.CourseReviewFormFillRequest;
import com.bilkent.erasmus.dtos.EditFormDTO;
import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import com.bilkent.erasmus.repositories.CourseBilkentRepository;
import com.bilkent.erasmus.repositories.CourseHostRepository;
import com.bilkent.erasmus.services.StorageService;
import com.bilkent.erasmus.services.preApprovalService.CourseReviewFormServiceNew;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/course-review-v2")
public class CourseReviewFormControllerNew {

    private final CourseReviewFormServiceNew courseReviewFormService;

    private final CourseBilkentRepository courseBilkentRepository;

    private final CourseHostRepository courseHostRepository;

    private final StorageService service;
    public CourseReviewFormControllerNew(CourseReviewFormServiceNew courseReviewFormService, CourseBilkentRepository courseBilkentRepository, CourseHostRepository courseHostRepository, StorageService service) {
        this.courseReviewFormService = courseReviewFormService;
        this.courseBilkentRepository = courseBilkentRepository;
        this.courseHostRepository = courseHostRepository;
        this.service = service;
    }

    @PostMapping("/save")
    public ResponseEntity<?> sendForm(@RequestBody CourseReviewFormFillRequest basicForm) throws Exception {

        CourseBilkent courseBilkent = courseBilkentRepository.findById(basicForm.getBilkentCourseId())
                .orElseThrow(() -> new Exception("no bilkent course found"));
        CourseHost courseHost = courseHostRepository.findById(basicForm.getHostCourseId())
                .orElseThrow(() -> new Exception("no host course found"));
        double credit = 4;
        return new ResponseEntity<>(courseReviewFormService.createForm(courseBilkent, courseHost, credit), HttpStatus.CREATED);
    }

    @PostMapping("/edit")
    public ResponseEntity<?> editForm(@RequestPart("data") CourseReviewEditDTO editDTO,
                                      @RequestPart("file") MultipartFile[] files) throws Exception {
        return new ResponseEntity<>(courseReviewFormService.editForm(editDTO, files),HttpStatus.ACCEPTED);
    }

    @PostMapping("/edit-v2")
    public ResponseEntity<?> editFormTogether(@RequestBody EditFormDTO dto) throws Exception {
        CourseReviewEditDTO editDTO = new CourseReviewEditDTO(dto.getFormId(), dto.getRequirements());
        return new ResponseEntity<>(courseReviewFormService.editForm(editDTO, dto.getFiles()),HttpStatus.ACCEPTED);
    }

    @PostMapping("/edit-v3")
    public ResponseEntity<?> editFormTogether(@RequestParam("file") MultipartFile file) throws Exception {
        return new ResponseEntity<>(courseReviewFormService.saveFile(file), HttpStatus.OK);
    }

    @PostMapping("/edit-v4")
    public ResponseEntity<?> editFormAllTogether(@RequestParam("file") MultipartFile file) throws Exception {
        return new ResponseEntity<>(courseReviewFormService.saveFileAllTogether(file), HttpStatus.OK);
    }
}
