package com.bilkent.erasmus.services.preApprovalService;

import com.bilkent.erasmus.dtos.CourseReviewFormDTO;
import com.bilkent.erasmus.dtos.InitialApplicationDTO.PreApprovalFormDTO;
import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.mappers.InitialApplicationMappper.PreApprovalFormMapper;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.PreApprovalFormErasmus;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.PreApprovalFormExchange;
import com.bilkent.erasmus.models.compositeModels.PreApprovalFormErasmusDetail;
import com.bilkent.erasmus.models.courseModels.CourseHost;
import com.bilkent.erasmus.models.universityModels.PartnerUniversityErasmus;
import com.bilkent.erasmus.models.universityModels.PartnerUniversityExchange;
import com.bilkent.erasmus.services.CourseReviewFormService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PreApprovalFormService {

    private final PreApprovalFormMapper formMapper;
    private final PreApprovalFormExchangeService exchangeService;
    private final PreApprovalFormErasmusService erasmusService;
    private final CourseReviewFormService courseReviewFormService;

    public PreApprovalFormService(PreApprovalFormMapper formMapper, PreApprovalFormExchangeService exchangeService,
                                  PreApprovalFormErasmusService erasmusService, CourseReviewFormService courseReviewFormService) {
        this.formMapper = formMapper;
        this.exchangeService = exchangeService;
        this.erasmusService = erasmusService;
        this.courseReviewFormService = courseReviewFormService;
    }

    public PreApprovalFormDTO sendForm(PreApprovalFormDTO form) {
    }

    private void createPreApprovalForm(PreApprovalFormDTO form) {
        if (form.getType().equalsIgnoreCase("erasmus"))
            createPreApprovalFormErasmus(form);
        else
            createPreApprovalFormExchange(form);
    }

    private PreApprovalFormExchange createPreApprovalFormExchange(PreApprovalFormDTO form) {
        PreApprovalFormExchange formExchange = new PreApprovalFormExchange();
        return formExchange;
    }

    private PreApprovalFormErasmus createPreApprovalFormErasmus(PreApprovalFormDTO form) throws Exception {
        PreApprovalFormErasmus formErasmus = new PreApprovalFormErasmus();

        formErasmus.setStatus(Status.IN_PROCESS);
        formErasmus.setSemester(form.getSemester());
        formErasmus.setPartnerUniversity(
                findPartnerUniversityErasmus(form.getId())
        );

        PreApprovalFormErasmusDetail preApprovalFormErasmusDetail = new PreApprovalFormErasmusDetail();
        preApprovalFormErasmusDetail.setPreApprovalForm(formErasmus);


        erasmusDetailRepository.save(preApprovalFormErasmusDetail);
        return formErasmus;
    }

    private PartnerUniversityErasmus findPartnerUniversityErasmus(int id) throws Exception {
        PartnerUniversityErasmus universityErasmus = universityErasmusRepository.findById(id).orElseThrow(() -> new Exception("not found university with id: " + id));
    }

    private PartnerUniversityExchange findPartnerUniversityExchange(int id) {
        PartnerUniversityExchange universityExchange = null;
        return universityExchange;
    }

    private void fillThePreApprovalFormErasmus(List<Integer> coursesBilkentId,
                                               List<CourseHost> hostCourses) {


    }


    private void createCourseReviewForm(CourseReviewFormDTO reviewFormDTO) {

        while (true) {
            courseReviewFormService.fillReviewForm(request);
        }
    }

    private void fillThePreApprovalFormExchange() {

    }
}
