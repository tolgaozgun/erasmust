package com.bilkent.erasmus.controllers;

import com.bilkent.erasmus.exceptions.GenericException;
import com.bilkent.erasmus.services.DataInitializerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.security.RolesAllowed;
import java.util.Map;

@RestController
@RequestMapping("/erasmus-initialize")
public class DataInitializerController {

    private final DataInitializerService service;

    public DataInitializerController(DataInitializerService service) {
        this.service = service;
    }
    @RolesAllowed({
            "ROLE_ERASMUS_COORDINATOR",
            "ROLE_COURSE_COORDINATOR",
            "ROLE_ADMIN",
            "ROLE_STUDENT"})
    @PostMapping("/get-partner-universities")
    public ResponseEntity<?> retrievePartnerUniversities(@RequestBody Map<String,String> json) throws GenericException {
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
