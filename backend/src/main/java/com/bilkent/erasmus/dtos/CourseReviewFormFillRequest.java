package com.bilkent.erasmus.dtos;

import com.bilkent.erasmus.models.FileData;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CourseReviewFormFillRequest {

    private int bilkentCourseId;

    private int hostCourseId;

    private String description;

}
