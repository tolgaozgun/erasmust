package com.bilkent.erasmus.dtos;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class EditFormDTO {

    private int formId;

    private String requirements;

    private MultipartFile[] files;
}
