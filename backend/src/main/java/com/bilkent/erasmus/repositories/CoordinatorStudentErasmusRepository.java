package com.bilkent.erasmus.repositories;

import com.bilkent.erasmus.models.compositeModels.CoordinatorStudentErasmus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoordinatorStudentErasmusRepository extends
        JpaRepository<CoordinatorStudentErasmus, Integer> {
   // CoordinatorStudentErasmus findByStudent_Id(int studentId);

    CoordinatorStudentErasmus findByStudent_Id(int student_id);

}
