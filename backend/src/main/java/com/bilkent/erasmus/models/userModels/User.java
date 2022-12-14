package com.bilkent.erasmus.models.userModels;

import com.bilkent.erasmus.embeddables.ContactInformation;
import com.bilkent.erasmus.models.enums.RoleBasedPermission;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "usersAll")
@Inheritance(strategy = InheritanceType.JOINED)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String firstName;

    private String lastName;

    private String password;

    private String starsId;

   // private String role;

    @Enumerated(EnumType.STRING)
    private RoleBasedPermission permission;

    @Embedded
    private ContactInformation contactInformation;

}
