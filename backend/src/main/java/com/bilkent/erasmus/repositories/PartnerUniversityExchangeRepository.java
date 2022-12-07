package com.bilkent.erasmus.repositories;

import com.bilkent.erasmus.models.universityModels.PartnerUniversityExchange;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PartnerUniversityExchangeRepository extends JpaRepository<PartnerUniversityExchange, Integer> {
}
