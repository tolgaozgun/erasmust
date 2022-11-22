package com.bilkent.erasmus.models.applicationModels.UserModels.AdminModels;

import com.bilkent.erasmus.enums.Title;
import com.bilkent.erasmus.models.applicationModels.UserModels.User;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "administrative")
@Inheritance(strategy = InheritanceType.JOINED)
public class Administrative extends User {

    @Enumerated(EnumType.STRING)
    private Title title;
}
