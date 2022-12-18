package com.bilkent.erasmus.models.applicationModels;

import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.models.userModels.AdministrativeModels.Chair;
import com.bilkent.erasmus.models.userModels.AdministrativeModels.Dean;
import com.bilkent.erasmus.models.userModels.AdministrativeModels.ExchangeCoordinator;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudent;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;
@NoArgsConstructor
@Entity
@Data
@Table(name = "CourseTransfer")
public class CourseTransferForm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToMany
    @JoinTable (name = "CourseTransferDetail",
            joinColumns = @JoinColumn(
                    name = "courseTransferId", referencedColumnName = "id"
            ),
            inverseJoinColumns = @JoinColumn(
                    name = "detailId", referencedColumnName = "id"
            ))
    List<CourseTransferFormDetailItem> details;

    @ManyToOne
    ExchangeCoordinator approvedByExchangeCoordinator;

    @ManyToOne
    Dean approvedByDean;

    @ManyToOne
    Chair approvedByChair;

    @ManyToOne
    OutGoingStudent belongsTo;

    @Enumerated(EnumType.STRING)
    Status status;


    public CourseTransferForm(OutGoingStudent outGoingStudent) {
        belongsTo = outGoingStudent;
    }
}
