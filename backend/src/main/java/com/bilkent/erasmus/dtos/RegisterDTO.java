package com.bilkent.erasmus.dtos;

import lombok.Data;

@Data
public class RegisterDTO {

    private String firstName;

    private String lastName;

    private String password;

    private String starsId;

    private String role;

    private String email;
}
