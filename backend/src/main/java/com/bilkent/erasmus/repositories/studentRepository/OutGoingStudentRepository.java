package com.bilkent.erasmus.repositories.studentRepository;

import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudent;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudentErasmus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OutGoingStudentRepository
        extends JpaRepository<OutGoingStudent, Integer> {
    Optional<OutGoingStudent> findByStarsId(String str);
}
