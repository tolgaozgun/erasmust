package com.bilkent.erasmus.repositories;


import com.bilkent.erasmus.models.compositeModels.CoordinatorStudentExchange;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoordinatorStudentExchangeRepository
        extends JpaRepository<CoordinatorStudentExchange, Integer> {

    CoordinatorStudentExchange findByStudent_Id(int student_id);
}
