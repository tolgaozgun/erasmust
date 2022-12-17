package com.bilkent.erasmus.repositories.PreApprovalFormRepositories;

import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.PreApprovalFormErasmus;
import com.bilkent.erasmus.models.applicationModels.PreApprovalForms.PreApprovalFormNew;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudentErasmus;
import com.bilkent.erasmus.models.userModels.StudentModels.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.bilkent.erasmus.enums.Status;

import java.util.List;
import java.util.Optional;

@Repository
public interface PreApprovalFormRepositoryNew
        extends JpaRepository<PreApprovalFormNew, Integer> {

    List<PreApprovalFormNew> findAll();


    Optional<PreApprovalFormNew> findByStatusAndStudent_Id(Status status, int id);

    PreApprovalFormNew findByStudent_StarsId(String starsId);
    
    PreApprovalFormNew findByStudent(Student student);


}
