package com.bilkent.erasmus.repositories.studentRepository;

import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OutGoingStudentRepository
        extends JpaRepository<OutGoingStudent, Integer> {
}
