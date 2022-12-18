package com.bilkent.erasmus.repositories;

import com.bilkent.erasmus.models.universityModels.Faculty;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FacultyRepository extends JpaRepository <Faculty, Integer> {
}
