package com.bilkent.erasmus.models.userModels.AdministrativeModels;

import com.bilkent.erasmus.models.enums.Title;
import com.bilkent.erasmus.models.userModels.User;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "administratives")
@Inheritance(strategy = InheritanceType.JOINED)
public class Administrative extends User {

    @Enumerated(EnumType.STRING)
    private Title title;
}
