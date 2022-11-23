package com.bilkent.erasmus.repository.studentRepository;

import com.bilkent.erasmus.models.applicationModels.UserModels.StudentModels.OutGoingStudentErasmus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OutGoingStudentErasmusRepository extends JpaRepository<OutGoingStudentErasmus, Integer> {
    OutGoingStudentErasmus findByFirstName(String name);
}
