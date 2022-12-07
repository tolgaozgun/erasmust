package com.bilkent.erasmus.dtos;

import com.bilkent.erasmus.models.enums.ApplicationPoolType;
import lombok.Data;

@Data
public class ApplicationPoolSelectionDTO {

    private ApplicationPoolType applicationPoolType;
}
