package com.bilkent.erasmus.repositories.studentRepository;

import com.bilkent.erasmus.models.userModels.StudentModels.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {

    Student findById(int id);
    Student findByFirstName(String name);
}
