package com.bilkent.erasmus.services;
import java.io.*;

import com.bilkent.erasmus.models.applicationModels.PreApprovalForms.PreApprovalFormNew;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudent;
import com.bilkent.erasmus.repositories.PreApprovalFormRepositories.PreApprovalFormRepositoryNew;
import com.bilkent.erasmus.repositories.applicationRepositories.ApplicationErasmusRepository;
import com.bilkent.erasmus.repositories.studentRepository.OutGoingStudentRepository;
import com.itextpdf.html2pdf.ConverterProperties;
import com.itextpdf.html2pdf.HtmlConverter;
import org.thymeleaf.TemplateEngine;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.WebContext;

import javax.persistence.EntityNotFoundException;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Service
public class PDFGeneratorService {
    private final TemplateEngine templateEngine;
    private final OutGoingStudentRepository outGoingStudentRepository;
    private final ApplicationErasmusRepository applicationErasmusRepository;
    private final PreApprovalFormRepositoryNew preApprovalFormRepositoryNew;


    public PDFGeneratorService(TemplateEngine templateEngine, OutGoingStudentRepository outGoingStudentRepository, ApplicationErasmusRepository applicationErasmusRepository, PreApprovalFormRepositoryNew preApprovalFormRepositoryNew) {
        this.templateEngine = templateEngine;
        this.outGoingStudentRepository = outGoingStudentRepository;
        this.applicationErasmusRepository = applicationErasmusRepository;
        this.preApprovalFormRepositoryNew = preApprovalFormRepositoryNew;
    }

    public ByteArrayOutputStream generate(HttpServletResponse response, HttpServletRequest request, ServletContext servletContext,
                                    String starsId)throws IOException {

        /* Create HTML using Thymeleaf template Engine */
        OutGoingStudent student = outGoingStudentRepository.findByStarsId(starsId).orElseThrow(() -> new EntityNotFoundException("No student found"));
        PreApprovalFormNew preApprovalFormNew = preApprovalFormRepositoryNew.findByStudent_StarsId(starsId);
        WebContext context = new WebContext(request, response, servletContext);
        context.setVariable("student", student);
        context.setVariable("preapp", preApprovalFormNew);
        String orderHtml = templateEngine.process("pre_approval_form.html", context);

        /* Setup Source and target I/O streams */

        ByteArrayOutputStream target = new ByteArrayOutputStream();

        /*Setup converter properties. */
        ConverterProperties converterProperties = new ConverterProperties();
        converterProperties.setBaseUri("http://localhost:8080");

        /* Call convert method */
        HtmlConverter.convertToPdf(orderHtml, target, converterProperties);
        return target;
        /* extract output as bytes */



        /* Send the response as downloadable PDF */

    }
}
