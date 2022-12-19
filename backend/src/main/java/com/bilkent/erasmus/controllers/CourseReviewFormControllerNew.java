package com.bilkent.erasmus.controllers;

import com.bilkent.erasmus.dtos.*;
import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import com.bilkent.erasmus.repositories.CourseBilkentRepository;
import com.bilkent.erasmus.repositories.CourseHostRepository;
import com.bilkent.erasmus.services.StorageService;
import com.bilkent.erasmus.services.preApprovalService.CourseReviewFormServiceNew;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.annotation.ParametersAreNonnullByDefault;
import javax.annotation.security.RolesAllowed;
import javax.servlet.http.HttpServletRequest;
import javax.xml.ws.Response;
import java.io.IOException;

@RestController
@RequestMapping("/api/course-review-v2")
@Slf4j
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

    @GetMapping("/downloadFile/{fileName:.+}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String fileName, HttpServletRequest request) {
        // Load file as Resource
        Resource resource = service.loadFileAsResource(fileName);

        // Try to determine file's content type
        String contentType = null;
        try {
            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        } catch (IOException ex) {
            log.info("Could not determine file type.");
        }

        // Fallback to the default content type if type could not be determined
        if (contentType == null) {
            contentType = "application/octet-stream";
        }
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }

    @GetMapping("/student/get/{id}")
    public ResponseEntity<?> getCourseReviewForm(@PathVariable int id) {
        return new ResponseEntity<>(courseReviewFormService.getCourseReviewFormByIdForStudent(id), HttpStatus.OK);
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
    @RolesAllowed({"ROLE_ERASMUS_COORDINATOR", "ROLE_COURSE_COORDINATOR", "ROLE_STUDENT"})
    @GetMapping("get-all/student/course-forms")
    public ResponseEntity<?> getAllFormsForStudent() {
        return new ResponseEntity<>(courseReviewFormService.getAllFormsForStudent(), HttpStatus.OK);
    }

    @RolesAllowed({"ROLE_ERASMUS_COORDINATOR", "ROLE_COURSE_COORDINATOR"})
    @PostMapping("/accept/{id}")
    public ResponseEntity<?> approveCourse(@PathVariable int id) {
        return new ResponseEntity<>(courseReviewFormService.accept(id), HttpStatus.OK);
    }

    @RolesAllowed({"ROLE_ERASMUS_COORDINATOR", "ROLE_COURSE_COORDINATOR"})
    @PostMapping("/reject/{id}")
    public ResponseEntity<?> rejectCourse(@PathVariable int id) {
        return new ResponseEntity<>(courseReviewFormService.reject(id), HttpStatus.OK);
    }

    @RolesAllowed({"ROLE_ERASMUS_COORDINATOR", "ROLE_COURSE_COORDINATOR","ROLE_ADMIN"})
    @PostMapping("/evaluate/{id}")
    public ResponseEntity<?> evaluateCourseReviewForm(@PathVariable int id, @RequestBody EvaluationDTO evaluation) {
        return new ResponseEntity<>(courseReviewFormService.evaluateCourseReview(id, evaluation), HttpStatus.OK);
    }

    @RolesAllowed({"ROLE_ERASMUS_COORDINATOR", "ROLE_COURSE_COORDINATOR","ROLE_ADMIN"})
    @PostMapping("/reply/{id}")
    public ResponseEntity<?> replyCourseReviewForm(@PathVariable int id, @RequestBody ReplyDTO replyDTO) throws Exception {
        return new ResponseEntity<>(courseReviewFormService.replyCourseReviewForm(id, replyDTO), HttpStatus.OK);
    }
/*
    @PostMapping("get-all/courseCoordinator/course-forms")
    public ResponseEntity<?> getAllFormsForStudent() {
        return new ResponseEntity<>(courseReviewFormService.getAllFormsForCourseCoordinator(), HttpStatus.OK);
    }

    @PostMapping("get-all/courseCoordinator/course-forms")
    public ResponseEntity<?> getAllFormsForStudent() {
        return new ResponseEntity<>(courseReviewFormService.getAllFormsForExchangeCoordinator(), HttpStatus.OK);
    }
*/


}
