package com.bilkent.erasmus.models;

import com.bilkent.erasmus.enums.ToDoType;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "toDoItems")
public class ToDoItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Enumerated(EnumType.STRING)
    private ToDoType type;

    private String title;

    private int key;
}
