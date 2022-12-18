package com.bilkent.erasmus.repositories.applicationRepositories;

import com.bilkent.erasmus.enums.DepartmentName;
import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.ApplicationErasmus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ApplicationErasmusRepository extends JpaRepository<ApplicationErasmus, Integer> {

    List<ApplicationErasmus> findAllByStatus(Status status);
    List<ApplicationErasmus> findAllByStatusAndStudent_DepartmentNameOrderByStudent_ErasmusPointDesc(Status status, DepartmentName departmentName);

    List<ApplicationErasmus> findAllByStatusAndStudent_DepartmentNameOrderByStudent_ErasmusPointAsc(Status status, DepartmentName dep);
    Optional<ApplicationErasmus> findByStudent_StarsId(String starsId);
    List<ApplicationErasmus> findAllByStudent_StarsId(String starsId);
    List<ApplicationErasmus> findAllByCoordinator_StarsId(String starsId);
    List<ApplicationErasmus> findAllByCoordinator_StarsIdAndStatus(String starsId, Status status);
    List<ApplicationErasmus> findAllByStudent_StarsIdAndStatus(String starsId, Status status);

    ApplicationErasmus findByStudent_Id(int id);

}
