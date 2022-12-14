package com.bilkent.erasmus.controllers;
import com.bilkent.erasmus.dtos.*;
import com.bilkent.erasmus.services.ApplicationErasmusService;
import com.bilkent.erasmus.services.ApplicationExchangeService;
import com.bilkent.erasmus.services.CourseReviewFormService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/course-review")
public class CourseReviewFormController {

    private final CourseReviewFormService courseReviewFormService;



    public CourseReviewFormController(CourseReviewFormService courseReviewFormService) {
        this.courseReviewFormService = courseReviewFormService;
    }

    @PostMapping("/save")
    public ResponseEntity<?> sendReviewForm(@RequestBody CourseReviewFormFillRequest request) throws Exception{
        return new ResponseEntity<>(courseReviewFormService.fillReviewForm(request), HttpStatus.CREATED);
    }

    @GetMapping("coordinator/list")
    public ResponseEntity<?> getAllReviewForms(@RequestBody ReviewFormListDTO filter) {
        return new ResponseEntity<>(courseReviewFormService.list(filter), HttpStatus.FOUND);
    }

    @GetMapping("student/{id}/list")
    public ResponseEntity<?> getAllStudentReviewForms(@PathVariable int id, @RequestBody ReviewFormStudentListDTO filter) {
        return new ResponseEntity<>(courseReviewFormService.listForStudent(filter), HttpStatus.FOUND);
    }

    @PostMapping("/review/{formId}")
    public ResponseEntity<?> reviewForm(@RequestBody ReviewFormRequestDTO request, @PathVariable int formId) throws Exception {
        return new ResponseEntity<>(courseReviewFormService.reviewForm(request, formId), HttpStatus.ACCEPTED);
    }

    /*@PostMapping("/save-exchange")
    public ResponseEntity<?> sendReviewFormExchange(@RequestBody CourseReviewFormExchangeDTO courseReviewFormDTO) {
        return new ResponseEntity<>(courseReviewFormService.sendReviewFormExchange(courseReviewFormDTO), HttpStatus.CREATED);
    }

//    @PostMapping("/save")
//    public ResponseEntity<?> sendReviewForm(@RequestBody CourseReviewFormDTO courseReviewFormDTO) {
//        return new ResponseEntity<>(courseReviewFormService.sendReviewForm(courseReviewFormDTO), HttpStatus.CREATED);
//    }

    @PatchMapping("/approve-form/{id}")
    public ResponseEntity<?> approveForm(@RequestBody @PathVariable int id) {
        courseReviewFormService.approveForm(id);
        return new ResponseEntity<>("aaaa", HttpStatus.CREATED);
    }

    @PatchMapping("/decline-form/{id}")
    public ResponseEntity<?> declineForm(@RequestBody @PathVariable int id) {
        courseReviewFormService.declineForm(id);
        return new ResponseEntity<>("bbb", HttpStatus.CREATED);
    }*/


}