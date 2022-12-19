package com.bilkent.erasmus.controllers;


import com.bilkent.erasmus.exceptions.GenericException;
import com.bilkent.erasmus.services.ApplicationPeriodService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/application-period")
public class ApplicationPeriodController {
    private final ApplicationPeriodService applicationPeriodService;

    public ApplicationPeriodController(ApplicationPeriodService applicationPeriodService) {
        this.applicationPeriodService = applicationPeriodService;
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody Map<String,String> json) throws GenericException {
        String start = json.get("start");
        String end = json.get("end");
        if (end == null | start == null) {
            throw new GenericException("Start and end dates cannot be empty");
        } else {
            return new ResponseEntity<>(applicationPeriodService
                    .create(Long.parseLong(start), Long.parseLong(end)), HttpStatus.CREATED);
        }
    }

    @PostMapping("/edit-start/{id}")
    public ResponseEntity<?> editStart(@RequestBody Map<String,String> json, @PathVariable int id) throws GenericException {

        return new ResponseEntity<>(applicationPeriodService
                .editStart(Long.parseLong(json.get("start")), id), HttpStatus.OK);
    }

    @PostMapping("/edit-end/{id}")
    public ResponseEntity<?> editEnd(@RequestBody Map<String,String> json, @PathVariable int id) throws GenericException {

        return new ResponseEntity<>(applicationPeriodService
                .editEnd(Long.parseLong(json.get("end")), id), HttpStatus.OK);
    }

    @GetMapping("/current")
    public ResponseEntity<?> getCurrent() throws GenericException {
        return new ResponseEntity<>(applicationPeriodService.viewCurrent(), HttpStatus.OK);
    }

}
