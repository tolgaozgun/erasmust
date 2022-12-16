package com.bilkent.erasmus.services;

import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import com.bilkent.erasmus.repositories.CourseBilkentRepository;
import lombok.Data;
import org.springframework.stereotype.Service;

@Data
@Service
public class CourseBilkentService {

    private final CourseBilkentRepository courseBilkentRepository;


    public CourseBilkentService(CourseBilkentRepository courseBilkentRepository) {
        this.courseBilkentRepository = courseBilkentRepository;
    }

    public CourseBilkent save(CourseBilkent courseBilkent) {
        return courseBilkentRepository.save(courseBilkent);
    }
}
