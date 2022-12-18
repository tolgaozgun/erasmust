package com.bilkent.erasmus.controllers;

import com.bilkent.erasmus.dtos.InitialApplicationDTO.PreApprovalFormDTO;
import com.bilkent.erasmus.dtos.PreApprovalFormDtos.PreApprovalFormDTONew;
import com.bilkent.erasmus.dtos.PreApprovalFormEditDTO;
import com.bilkent.erasmus.services.preApprovalService.PreApprovalFormNewService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;

@Slf4j
@RestController
@RequestMapping("/pre-approval/erasmus")
public class PreApprovalFormErasmusControllerNew {

    private final PreApprovalFormNewService preApprovalService;

    public PreApprovalFormErasmusControllerNew(PreApprovalFormNewService preApprovalService) {
        this.preApprovalService = preApprovalService;
    }

    @RolesAllowed({"ROLE_ADMIN", "ROLE_STUDENT"})
    @PostMapping("/save")
    public ResponseEntity<?> saveForm(@RequestBody PreApprovalFormDTONew form) throws Exception {
        return new ResponseEntity<>(preApprovalService.saveForm(form), HttpStatus.CREATED);
    }

    @PatchMapping("/{id}/edit")
    public ResponseEntity<?> editForm(@PathVariable int id, @RequestBody PreApprovalFormEditDTO form) throws Exception {
        return new ResponseEntity<>(preApprovalService.editForm(id,form), HttpStatus.OK);
    }
    @RolesAllowed("ROLE_STUDENT")
    @GetMapping("/all-preapproval-student")
    public ResponseEntity<?> getAllPreapprovalByStudent() {
        return new ResponseEntity<>(preApprovalService.getAllPreapprovalStudent(), HttpStatus.OK);
    }

    //todo add hoca permission
    @GetMapping("/all-preapproval")
    public ResponseEntity<?> getAllPreapproval() {
        return new ResponseEntity<>(preApprovalService.getAllPreapproval(), HttpStatus.OK);
    }

    @GetMapping("/retrieveForm")
    public ResponseEntity<?> getForm() throws Exception {
        return new ResponseEntity<>(preApprovalService.getStudentForm(),HttpStatus.OK);
    }

    @GetMapping("/course-coordinator-retrieve-all")
    public ResponseEntity<?> getAll() {
        return new ResponseEntity<>(preApprovalService.gelAllReviewFormsForCourseCoordinator(), HttpStatus.OK);
    }

    @RolesAllowed("ROLE_STUDENT")
    @GetMapping("get-all/student/course-forms")
    public ResponseEntity<?> getAllFormsForStudent() throws Exception {
        return new ResponseEntity<>(preApprovalService.getAllCourseReviewFormsForStudent(), HttpStatus.OK);
    }

    @RolesAllowed("ROLE_ADMIN")
    @GetMapping("get-all/exchange-coordinator/review-course-forms")
    public ResponseEntity<?> getAllFormsForExchangeCoordinatorToReview() {
        return new ResponseEntity<>(preApprovalService.getAllReviewFormsForExchangeCoordinator(), HttpStatus.OK);
    }


}
