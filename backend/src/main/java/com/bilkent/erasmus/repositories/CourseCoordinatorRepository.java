package com.bilkent.erasmus.repositories;

import com.bilkent.erasmus.models.userModels.AdministrativeModels.CourseCoordinator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseCoordinatorRepository extends
        JpaRepository<CourseCoordinator, Integer> {

}
