package com.bilkent.erasmus.repositories.applicationRepositories;

import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.models.applicationModels.CourseTransferForm;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CourseTransferFormRepository extends JpaRepository<CourseTransferForm, Integer> {
    Optional<CourseTransferForm> findByStatusNotAndBelongsTo_StarsId(Status status,String id);

}
