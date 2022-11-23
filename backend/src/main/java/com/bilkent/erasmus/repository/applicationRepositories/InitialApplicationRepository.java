package com.bilkent.erasmus.repository.applicationRepositories;

import com.bilkent.erasmus.enums.ApplicationPoolType;
import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.Application;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.ApplicationErasmus;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.ApplicationExchange;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.stereotype.Repository;

import java.util.List;

@NoRepositoryBean
public interface InitialApplicationRepository extends JpaRepository<Application, Integer> {}
