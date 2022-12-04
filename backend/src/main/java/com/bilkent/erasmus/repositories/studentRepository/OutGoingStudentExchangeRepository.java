package com.bilkent.erasmus.repositories.studentRepository;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudentExchange;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OutGoingStudentExchangeRepository  extends JpaRepository<OutGoingStudentExchange, Integer> {

}
