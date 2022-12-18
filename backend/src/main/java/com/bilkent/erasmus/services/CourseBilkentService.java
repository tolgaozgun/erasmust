package com.bilkent.erasmus.services;

import com.bilkent.erasmus.dtos.CourseBilkentDTO;
import com.bilkent.erasmus.mappers.PreApprovalFormMapper.CourseBilkentMapper;
import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import com.bilkent.erasmus.repositories.CourseBilkentRepository;
import lombok.Data;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Data
@Service
public class CourseBilkentService {

    private final CourseBilkentRepository courseBilkentRepository;
    private final CourseBilkentMapper courseBilkentMapper;


    public CourseBilkentService(CourseBilkentRepository courseBilkentRepository, CourseBilkentMapper courseBilkentMapper) {
        this.courseBilkentRepository = courseBilkentRepository;
        this.courseBilkentMapper = courseBilkentMapper;
    }

    public CourseBilkent save(CourseBilkent courseBilkent) {
        return courseBilkentRepository.save(courseBilkent);
    }

    public List<CourseBilkentDTO> getAll() {
        return courseBilkentMapper.toCourseBilkentDTOList(courseBilkentRepository.findAll());
    }


    public CourseBilkent getById(int id) {
        Optional<CourseBilkent> optionalCourseBilkent = courseBilkentRepository.findById(id);
        if (optionalCourseBilkent.isEmpty()) return null;
        return optionalCourseBilkent.get();
    }

    public CourseBilkentDTO setRequirements(String req) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        CourseBilkent course = courseBilkentRepository
                .findByCourseCoordinator_StarsId(auth.getName()).orElseThrow(() -> new EntityNotFoundException("Course doesnt exist"));
        course.setRequirements(req);

        return courseBilkentMapper.toCourseBilkentDTO(courseBilkentRepository.save(course));
    }
}
