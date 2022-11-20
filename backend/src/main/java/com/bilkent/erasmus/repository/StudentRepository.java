package com.bilkent.erasmus.repository;

import com.bilkent.erasmus.models.StudentModels.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {

    Student findByFirstName(String name);
}
