package com.bilkent.erasmus.repository.applicationRepositories;

import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InitialApplicationRepository extends JpaRepository<Application, Integer> {
}
