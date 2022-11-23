package com.bilkent.erasmus.repository.studentRepository;

import com.bilkent.erasmus.models.applicationModels.UserModels.StudentModels.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {

    Student findById(int id);
    Student findByFirstName(String name);
}
