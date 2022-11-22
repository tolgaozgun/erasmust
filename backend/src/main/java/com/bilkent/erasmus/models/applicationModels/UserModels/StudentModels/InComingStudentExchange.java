package com.bilkent.erasmus.models.applicationModels.UserModels.StudentModels;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "inComingStudentExchange")
public class InComingStudentExchange extends Student  {

}
