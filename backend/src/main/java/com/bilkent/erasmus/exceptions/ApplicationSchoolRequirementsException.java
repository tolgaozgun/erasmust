package com.bilkent.erasmus.exceptions;

import com.bilkent.erasmus.models.universityModels.PartnerUniversityErasmus;
import lombok.Data;

import java.util.List;

@Data
public class ApplicationSchoolRequirementsException extends Exception{

    public ApplicationSchoolRequirementsException(String message) {
        super(message);
    }
}
