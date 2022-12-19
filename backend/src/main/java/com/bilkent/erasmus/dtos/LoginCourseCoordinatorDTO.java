package com.bilkent.erasmus.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LoginCourseCoordinatorDTO {

    private String firstName;

    private String lastName;

    private String role;

    private String token;
}
