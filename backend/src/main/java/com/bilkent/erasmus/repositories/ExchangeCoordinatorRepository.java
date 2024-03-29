package com.bilkent.erasmus.repositories;

import com.bilkent.erasmus.enums.DepartmentName;
import com.bilkent.erasmus.models.userModels.AdministrativeModels.ExchangeCoordinator;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ExchangeCoordinatorRepository extends JpaRepository<ExchangeCoordinator, Integer> {
    ExchangeCoordinator findFirstByDepartmentNameOrderByWorkLoadAsc(DepartmentName departmentName);

    Optional<ExchangeCoordinator> findByStarsId(String str);

}
