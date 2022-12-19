package com.bilkent.erasmus.repositories;

import com.bilkent.erasmus.models.ApplicationPeriod;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ApplicationPeriodRepository extends JpaRepository<ApplicationPeriod, Integer> {
    Optional<ApplicationPeriod> findByEndDateGreaterThan(long endDate);
}
