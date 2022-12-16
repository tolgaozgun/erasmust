package com.bilkent.erasmus.dtos.UserDtos;

import com.bilkent.erasmus.enums.DepartmentName;
import lombok.Data;

@Data
public class UserDTO {

    private int id;

    private String starsID;

    private String name;

    private String surname;

    private String email;

    private DepartmentName departmentName;

    private Boolean status;
}
