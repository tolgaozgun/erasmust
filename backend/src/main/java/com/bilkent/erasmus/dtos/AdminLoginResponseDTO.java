package com.bilkent.erasmus.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AdminLoginResponseDTO {

    private String starsId;

    private String firstName;

    private String lastName;

    private String token;
}
