package com.bilkent.erasmus.controllers;

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
    public ResponseEntity<?> sendLearningAgreement() throws Exception {
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

    /*
    @PatchMapping("/edit")
    public ResponseEntity<?> editAgreement(@RequestBody LearningAgreementDTO erasmusDTO) throws Exception {
        return new ResponseEntity<>(erasmusService.editForm(erasmusDTO), HttpStatus.OK);
    }
*/

    @PostMapping("/cancel")
    public ResponseEntity<?> cancelAgreement() throws Exception {
        erasmusService.cancelAgreement();
        return new ResponseEntity<>("Application cancelled", HttpStatus.OK);
    }

    @GetMapping("/all-applications")
    public ResponseEntity<?> viewAllAgreements(){
        return new ResponseEntity<>(erasmusService.getAllAgreements(), HttpStatus.OK);
    }

    //edit
}
