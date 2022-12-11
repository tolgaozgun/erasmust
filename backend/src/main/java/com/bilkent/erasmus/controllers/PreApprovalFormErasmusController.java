package com.bilkent.erasmus.controllers;

import com.bilkent.erasmus.dtos.InitialApplicationDTO.PreApprovalFormDTO;
import com.bilkent.erasmus.dtos.PreApprovalFormListDTO;
import com.bilkent.erasmus.services.preApprovalService.PreApprovalFormErasmusService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;

@RestController
@RequestMapping("/pre-approval/erasmus")
@Slf4j
public class PreApprovalFormErasmusController {

    private final PreApprovalFormErasmusService erasmusService;

    public PreApprovalFormErasmusController(PreApprovalFormErasmusService erasmusService) {
        this.erasmusService = erasmusService;
    }
    @RolesAllowed("ROLE_ADMIN")
    @PostMapping("/save")
    public ResponseEntity<?> savePreApprovalForm(@RequestBody PreApprovalFormDTO form) throws Exception{
        return new ResponseEntity<>(erasmusService.saveForm(form), HttpStatus.CREATED);
    }
    @RolesAllowed("ROLE_USER")
    @GetMapping("/list")
    public ResponseEntity<?> listAllExchangeForms(@RequestBody PreApprovalFormListDTO form) throws Exception {
        log.info("pre approval filter is called");
        return new ResponseEntity<>(erasmusService.filter(form), HttpStatus.CREATED);
    }
}
