package com.bilkent.erasmus.repositories.applicationRepositories;

import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.PreApprovalFormErasmus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PreApprovalFormErasmusRepository extends JpaRepository<PreApprovalFormErasmus, Integer> {

    PreApprovalFormErasmus findByStudentId(String studentId);
}
