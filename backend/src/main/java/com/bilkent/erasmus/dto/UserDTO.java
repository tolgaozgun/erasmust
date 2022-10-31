package com.bilkent.erasmus.dto;

import com.bilkent.erasmus.enums.Department;
import lombok.Data;

@Data
public class UserDTO {

    private int id;

    private String starsID;

    private String name;

    private String surname;

    private String email;

    private Department department;

    private Boolean status;
}
