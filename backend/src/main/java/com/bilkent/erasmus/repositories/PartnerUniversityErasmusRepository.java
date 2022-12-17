package com.bilkent.erasmus.repositories;

import com.bilkent.erasmus.models.universityModels.PartnerUniversityErasmus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PartnerUniversityErasmusRepository extends JpaRepository<PartnerUniversityErasmus, Integer> {
    List<PartnerUniversityErasmus> findAllByQuotaGreaterThan(int quota);

    @Override
    List<PartnerUniversityErasmus> findAll();
}
