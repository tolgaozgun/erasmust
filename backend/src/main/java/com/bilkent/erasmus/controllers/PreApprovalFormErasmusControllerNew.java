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
}
