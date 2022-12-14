package com.bilkent.erasmus.repositories.studentRepository;

import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudentErasmus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OutGoingStudentErasmusRepository extends
        JpaRepository<OutGoingStudentErasmus, Integer> {
    OutGoingStudentErasmus findByStarsId(String starsId);

    OutGoingStudentErasmus findByFirstName(String name);
}
