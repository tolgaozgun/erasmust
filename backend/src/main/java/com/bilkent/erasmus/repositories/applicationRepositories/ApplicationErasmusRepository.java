package com.bilkent.erasmus.repositories.applicationRepositories;

import com.bilkent.erasmus.models.enums.Status;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.ApplicationErasmus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ApplicationErasmusRepository extends JpaRepository<ApplicationErasmus, Integer> {

    List<ApplicationErasmus> findAllByStatus(Status status);
    List<ApplicationErasmus> findAllByStatusOrderByStudent_ErasmusPointDesc(Status status);
    List<ApplicationErasmus> findAllByStatusOrderByStudent_ErasmusPointAsc(Status status);
    Optional<ApplicationErasmus> findByStudent_StarsId(String starsId);


}
