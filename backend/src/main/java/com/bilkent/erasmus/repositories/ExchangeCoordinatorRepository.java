package com.bilkent.erasmus.repositories;

import com.bilkent.erasmus.models.userModels.AdministrativeModels.ExchangeCoordinator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExchangeCoordinatorRepository
        extends JpaRepository<ExchangeCoordinator, Integer> {
}
