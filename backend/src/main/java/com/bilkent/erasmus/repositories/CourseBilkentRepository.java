package com.bilkent.erasmus.repositories;

import com.bilkent.erasmus.models.courseModels.Course;
import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CourseBilkentRepository extends JpaRepository<CourseBilkent, Integer> {
    Optional<CourseBilkent> findByCourseCoordinator_StarsId(String s);
}
