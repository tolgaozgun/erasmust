package com.bilkent.erasmus.controller;

import com.bilkent.erasmus.dto.UserDTO;
import com.bilkent.erasmus.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // localhost:8080/user/save
    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody UserDTO userDTO) {
        return new ResponseEntity<>(userService.save(userDTO), HttpStatus.OK);
    }
}
