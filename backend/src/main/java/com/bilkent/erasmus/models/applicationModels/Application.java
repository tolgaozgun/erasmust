package com.bilkent.erasmus.models.applicationModels;

import com.bilkent.erasmus.models.universityModels.PartnerUniversity;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "applications")
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    // @OneToMany
    // private List<PartnerUniversity> universitiesApplied;
}
