package com.bilkent.erasmus.dtos;

import com.bilkent.erasmus.enums.CurriculumSemester;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LoginExchangeCoordinatorDTO {

    private String firstName;

    private String lastName;

    private String role;

    private String token;
}
