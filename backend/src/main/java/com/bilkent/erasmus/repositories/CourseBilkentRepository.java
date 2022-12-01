package com.bilkent.erasmus.repositories;

import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseBilkentRepository extends JpaRepository<CourseBilkent, Integer> {
}
