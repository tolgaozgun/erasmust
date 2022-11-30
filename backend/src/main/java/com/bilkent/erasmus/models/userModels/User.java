package com.bilkent.erasmus.models.userModels;

import com.bilkent.erasmus.embeddables.ContactInformation;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "baseUser")
@Inheritance(strategy = InheritanceType.JOINED)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String firstName;

    private String lastName;

    private String password;

    private String starsId;

    private String role;

    @Embedded
    private ContactInformation contactInformation;

}
