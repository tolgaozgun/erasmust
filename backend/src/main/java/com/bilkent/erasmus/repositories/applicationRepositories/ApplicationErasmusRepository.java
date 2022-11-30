package com.bilkent.erasmus.repositories.applicationRepositories;

import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.ApplicationErasmus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ApplicationErasmusRepository extends JpaRepository<ApplicationErasmus, Integer> {

    List<ApplicationErasmus> findAllByStatus(Status status);
}
