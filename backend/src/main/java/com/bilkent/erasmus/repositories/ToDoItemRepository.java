package com.bilkent.erasmus.repositories;

import com.bilkent.erasmus.models.ToDoItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ToDoItemRepository extends JpaRepository<ToDoItem, Integer> {
}
