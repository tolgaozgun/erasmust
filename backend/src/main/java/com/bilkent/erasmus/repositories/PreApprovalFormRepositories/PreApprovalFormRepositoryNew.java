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
    List<PreApprovalFormNew> findAllByStudent_StarsId(String id);

    PreApprovalFormNew findByStudent_StarsId(String starsId);

    List<PreApprovalFormNew> findByExchangeCoordinator_StarsId(String str);

    List<PreApprovalFormNew> findAllByExchangeCoordinator_StarsId(String str);
    
    PreApprovalFormNew findByStudent(Student student);
    Optional<PreApprovalFormNew> findByStatusAndStudent_StarsId(Status status, String str);

    PreApprovalFormNew findByFormsId(int id);
}
