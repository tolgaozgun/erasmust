package com.bilkent.erasmus.repositories.applicationRepositories;

import com.bilkent.erasmus.models.applicationModels.CourseTransferFormDetailItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseTransferFormDetailRepository extends JpaRepository<CourseTransferFormDetailItem, Integer> {
}
