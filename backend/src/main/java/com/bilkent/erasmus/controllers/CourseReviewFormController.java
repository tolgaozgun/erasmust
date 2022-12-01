package com.bilkent.erasmus.controllers;
import com.bilkent.erasmus.dtos.CourseReviewFormErasmusDTO;
import com.bilkent.erasmus.dtos.CourseReviewFormExchangeDTO;
import com.bilkent.erasmus.dtos.CourseReviewFormFillRequest;
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

    @PostMapping("/save-erasmus")
    public ResponseEntity<?> sendReviewFormErasmus(@RequestBody CourseReviewFormFillRequest request) throws Exception{
        return new ResponseEntity<>(courseReviewFormService.fillReviewForm(request), HttpStatus.CREATED);
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