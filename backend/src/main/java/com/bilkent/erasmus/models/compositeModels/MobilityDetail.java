package com.bilkent.erasmus.models.compositeModels;

import com.bilkent.erasmus.models.enums.ApplicationPoolType;
import com.bilkent.erasmus.models.enums.MobilityType;
import com.bilkent.erasmus.models.courseModels.CourseBilkent;
import com.bilkent.erasmus.models.courseModels.CourseHost;


import javax.persistence.Enumerated;
import javax.persistence.ManyToOne;
import java.util.List;

public class MobilityDetail {

    @Enumerated
    private MobilityType mobilityType;

    @ManyToOne
    private List<CourseBilkent> courseBilkent;

    @ManyToOne
    private List<CourseHost> courseHost;

    public MobilityType getMobilityType() {
        return mobilityType;
    }
}
