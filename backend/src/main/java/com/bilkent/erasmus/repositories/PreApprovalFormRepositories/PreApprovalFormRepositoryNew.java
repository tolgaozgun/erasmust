package com.bilkent.erasmus.repositories.PreApprovalFormRepositories;

import com.bilkent.erasmus.dtos.PreApprovalFormDtos.PreApprovalFormDTONew;
import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.models.applicationModels.PreApprovalForms.PreApprovalFormNew;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PreApprovalFormRepositoryNew
        extends JpaRepository<PreApprovalFormNew, Integer> {

    List<PreApprovalFormNew> findAll();
    List<PreApprovalFormNew> findAllByStudent_StarsId(String starsId);

    Optional<PreApprovalFormNew> findByStatusAndStudent_Id(Status status, int id);

    List<PreApprovalFormNew> findAllByStatusAndExchangeCoordinator_Id(Status status, int id);

}
