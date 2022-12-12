package com.bilkent.erasmus.repositories.applicationRepositories;

import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.Application;
import com.bilkent.erasmus.models.enums.Status;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.ApplicationErasmus;
import com.bilkent.erasmus.models.universityModels.PartnerUniversityErasmus;
import com.bilkent.erasmus.models.userModels.AdministrativeModels.ExchangeCoordinator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ApplicationErasmusRepository extends JpaRepository<ApplicationErasmus, Integer> {

    List<ApplicationErasmus> findAllByStatus(Status status);

    ApplicationErasmus findByStudent_Id(int id);

}
