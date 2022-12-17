package com.bilkent.erasmus.repositories.PreApprovalFormRepositories;

import com.bilkent.erasmus.dtos.PreApprovalFormDtos.PreApprovalFormDTONew;
import com.bilkent.erasmus.models.applicationModels.PreApprovalForms.PreApprovalFormNew;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PreApprovalFormRepositoryNew
        extends JpaRepository<PreApprovalFormNew, Integer> {

    List<PreApprovalFormNew> findAll();
    List<PreApprovalFormNew> findAllByStudent_StarsId(String starsId);
}
