package com.bilkent.erasmus.controllers;

import com.bilkent.erasmus.dtos.EvaluationDTO;
import com.bilkent.erasmus.dtos.InitialApplicationDTO.PreApprovalFormDTO;
import com.bilkent.erasmus.dtos.PreApprovalFormDtos.PreApprovalFormDTONew;
import com.bilkent.erasmus.dtos.PreApprovalFormEditDTO;
import com.bilkent.erasmus.exceptions.PreApprovalFormNotCompletedException;
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
    @RolesAllowed("ROLE_STUDENT")
    @GetMapping("/all-preapproval-student/{id}")
    public ResponseEntity<?> getPreapprovalByFormIdForStudent(@PathVariable int id) {
        return new ResponseEntity<>(preApprovalService.getPreapprovalByIdForStudent(id), HttpStatus.OK);
    }

    //todo add hoca permission
    @RolesAllowed({"ROLE_ERASMUS_COORDINATOR", "ROLE_COURSE_COORDINATOR"})
    @GetMapping("/all-preapproval")
    public ResponseEntity<?> getAllPreapproval() {
        return new ResponseEntity<>(preApprovalService.getAllPreapproval(), HttpStatus.OK);
    }

    @RolesAllowed("ROLE_STUDENT")
    @GetMapping("/retrieveForm")
    public ResponseEntity<?> getForm() throws Exception {
        return new ResponseEntity<>(preApprovalService.getStudentForm(),HttpStatus.OK);
    }

    @RolesAllowed("ROLE_ADMIN")
    @GetMapping("/get-all/course-coordinator/review-course-forms")
    public ResponseEntity<?> getAll() {
        return new ResponseEntity<>(preApprovalService.gelAllReviewFormsForCourseCoordinator(), HttpStatus.OK);
    }

    @RolesAllowed("ROLE_STUDENT")
    @GetMapping("get-all/student/course-forms")
    public ResponseEntity<?> getAllFormsForStudent() throws Exception {
        return new ResponseEntity<>(preApprovalService.getAllCourseReviewFormsForStudent(), HttpStatus.OK);
    }

    @RolesAllowed("ROLE_STUDENT")
    @GetMapping("get/student/course-forms/{id}")
    public ResponseEntity<?> getFormForStudent(@PathVariable int id) throws Exception {
        return new ResponseEntity<>(preApprovalService.getCourseReviewFormForStudent(id), HttpStatus.OK);
    }

    @RolesAllowed({"ROLE_ERASMUS_COORDINATOR", "ROLE_ADMIN"})
    @GetMapping("get-all/exchange-coordinator/review-course-forms")
    public ResponseEntity<?> getAllFormsForExchangeCoordinatorToReview() {
        return new ResponseEntity<>(preApprovalService.getAllReviewFormsForExchangeCoordinator(), HttpStatus.OK);
    }

    @RolesAllowed({"ROLE_ERASMUS_COORDINATOR", "ROLE_ADMIN"})
    @GetMapping("get-all/exchange-coordinator/pre-approval-forms")
    public ResponseEntity<?> getAllPreApprovalFormsForExchangeCoordinatorToEvaluate() {
        return new ResponseEntity<>(preApprovalService.getAllPreApprovalFormsForExchangeCoordinatorToEvaluate(), HttpStatus.OK);
    }


    @RolesAllowed({"ROLE_ERASMUS_COORDINATOR", "ROLE_ADMIN"})
    @GetMapping("get/exchange-coordinator/pre-approval-form/{id}")
    public ResponseEntity<?> getPreApprovalFormForExchangeCoordinatorToEvaluate(@PathVariable int id) {
        return new ResponseEntity<>(preApprovalService.getPreApprovalFormForExchangeCoordinatorToEvaluate(id), HttpStatus.OK);
    }

    // todo -> role ü değiştir
    @RolesAllowed("ROLE_ADMIN")
    @PostMapping("/evaluate/{id}")
    public ResponseEntity<?> evaluatePreApprovalForm(@PathVariable int id, @RequestBody EvaluationDTO evaluation) throws PreApprovalFormNotCompletedException {
        return new ResponseEntity<>(preApprovalService.evaluate(id, evaluation), HttpStatus.OK);
    }

}
