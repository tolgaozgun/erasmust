package com.bilkent.erasmus.repositories.applicationRepositories;

import com.bilkent.erasmus.models.enums.Status;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.ApplicationExchange;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ApplicationExchangeRepository extends JpaRepository<ApplicationExchange, Integer> {
    List<ApplicationExchange> findAllByStatus(Status status);
}

