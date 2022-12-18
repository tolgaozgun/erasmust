package com.bilkent.erasmus.dtos;

import com.bilkent.erasmus.enums.CurriculumSemester;
import com.bilkent.erasmus.models.universityModels.Department;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LoginStudentResponseDTO {

    private String firstName;

    private String lastName;

    private String starsId;

    private Department department;

    private String academicYear;

    private CurriculumSemester semester;

}


