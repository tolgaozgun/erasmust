package com.bilkent.erasmus.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@Table(name = "applicationPeriod")
@NoArgsConstructor
public class ApplicationPeriod {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    long startDate;
    long endDate;

    public ApplicationPeriod(long start, long end) {
        this.startDate = start;
        this.endDate = end;
    }

}




