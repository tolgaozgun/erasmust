package com.bilkent.erasmus.controllers;

import com.bilkent.erasmus.dtos.InitialApplicationDTO.LearningAgreementDTO;
import com.bilkent.erasmus.dtos.LearningAgreementErasmusDTO;
import com.bilkent.erasmus.dtos.ReviewFormRequestDTO;
import com.bilkent.erasmus.services.LearningAgreementErasmusService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/learning-agreement-erasmus")
public class LearningAgreementErasmusController {

    private final LearningAgreementErasmusService erasmusService;

    public LearningAgreementErasmusController(LearningAgreementErasmusService erasmusService) {
        this.erasmusService = erasmusService;
    }

    @GetMapping("/get-initial")
    public ResponseEntity<?> getInitialLearningAgreement() throws Exception {
        return new ResponseEntity<>(erasmusService.getInitialFieldValues(), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> sendLearningAgreement(@RequestBody LearningAgreementErasmusDTO learningAgreementDTO) throws Exception {
        return new ResponseEntity<>(erasmusService.saveForm(learningAgreementDTO), HttpStatus.CREATED);
    }

/*
    @GetMapping("/retrieve-by-type")
    public ResponseEntity<?> retrieveLearningAgreement(@RequestBody LearningAgreementDTO learningAgreementDTO, @RequestBody MobilityDetail mobility) throws Exception {
        return new ResponseEntity(erasmusService.retrieveAgreements(mobility), HttpStatus.ACCEPTED);
    }
*/

    @PostMapping("/review/{formId}")
    public ResponseEntity<?> reviewForm(@RequestBody ReviewFormRequestDTO request, @PathVariable int formId) throws Exception {
        return new ResponseEntity<>(erasmusService.reviewForm(request, formId), HttpStatus.ACCEPTED);
    }

    @PatchMapping("/edit/{formId}")
    public ResponseEntity<?> editAgreement(@RequestBody LearningAgreementDTO erasmusDTO, @PathVariable int formId) throws Exception {
        return new ResponseEntity<>(erasmusService.editForm(formId, erasmusDTO), HttpStatus.OK);
    }

    @PostMapping("/cancel")
    public ResponseEntity<?> cancelAgreement() throws Exception {
        erasmusService.cancelAgreement();
        return new ResponseEntity<>("Application cancelled", HttpStatus.OK);
    }

    @GetMapping("/all-applications")
    public ResponseEntity<?> viewAllAgreements(){
        return new ResponseEntity<>(erasmusService.getAllAgreements(), HttpStatus.OK);
    }

    @GetMapping("/student-get-all")
    public ResponseEntity<?> getAllStudent(){
        return new ResponseEntity<>(erasmusService.getAllStudent(), HttpStatus.OK);
    }

    @GetMapping("/get-by-id/{id}")
    public ResponseEntity<?> findLearningAgreementByFormId(@PathVariable int id) throws Exception {
        return new ResponseEntity<>(erasmusService.findLearningAgreementByFormId(id), HttpStatus.OK);
    }

/*    @PatchMapping("/add-course-during")
    public ResponseEntity<?> addCourseDuring(@RequestBody LearningAgreementDTO erasmusDTO, @PathVariable int formId) throws Exception {
        return new ResponseEntity<>(erasmusService.saveCourseHostDuring(formId, erasmusDTO), HttpStatus.OK);
    }

    @PatchMapping("/add-course-after")
    public ResponseEntity<?> addCourseAfter(@RequestBody LearningAgreementDTO erasmusDTO, @PathVariable int formId) throws Exception {
        return new ResponseEntity<>(erasmusService.saveCourseHostAfter(formId, erasmusDTO), HttpStatus.OK);
    }*/
}
