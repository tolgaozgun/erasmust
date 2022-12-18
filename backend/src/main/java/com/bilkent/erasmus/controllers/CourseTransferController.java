package com.bilkent.erasmus.controllers;

import com.bilkent.erasmus.dtos.CourseTransferDTO;
import com.bilkent.erasmus.dtos.CourseTransferDetailDTO;
import com.bilkent.erasmus.repositories.applicationRepositories.CourseTransferFormRepository;
import com.bilkent.erasmus.services.CourseTransferService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/course-transfer")
public class CourseTransferController {
    private final CourseTransferService courseTransferService;
    private final CourseTransferFormRepository courseTransferFormRepository;

    public CourseTransferController(CourseTransferService courseTransferService, CourseTransferFormRepository courseTransferFormRepository) {
        this.courseTransferService = courseTransferService;
        this.courseTransferFormRepository = courseTransferFormRepository;
    }


    @PostMapping("/create/{starsId}")
    public ResponseEntity<?> createCourseTransfer(@PathVariable String starsId) throws Exception {
        return new ResponseEntity<>(courseTransferService.create(starsId), HttpStatus.CREATED);
    }

    @PostMapping("/edit/{formId}")
    public ResponseEntity<?> editCourseTransfer(@PathVariable int formId, @RequestBody CourseTransferDTO dto) throws Exception {
        return new ResponseEntity<>(courseTransferService.edit(dto, formId), HttpStatus.OK);
    }

    @PostMapping("/edit-detail/{detailId}")
    public ResponseEntity<?> editCourseTransferDetail(@PathVariable int detailId, @RequestBody CourseTransferDetailDTO dto) throws Exception {
        return new ResponseEntity<>(courseTransferService.editDetail(dto, detailId), HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAll() {
        return new ResponseEntity<>(courseTransferFormRepository.findAll(), HttpStatus.OK);
    }
}
