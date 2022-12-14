package com.bilkent.erasmus.services;
import java.io.*;

import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.ApplicationErasmus;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudent;
import com.bilkent.erasmus.repositories.applicationRepositories.ApplicationErasmusRepository;
import com.bilkent.erasmus.repositories.studentRepository.OutGoingStudentRepository;
import com.itextpdf.html2pdf.ConverterProperties;
import com.itextpdf.html2pdf.HtmlConverter;
import org.thymeleaf.TemplateEngine;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.WebContext;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Service
public class PDFGeneratorService {
    private final TemplateEngine templateEngine;
    private final OutGoingStudentRepository outGoingStudentRepository;
    private final ApplicationErasmusRepository applicationErasmusRepository;



    public PDFGeneratorService(TemplateEngine templateEngine, OutGoingStudentRepository outGoingStudentRepository, ApplicationErasmusRepository applicationErasmusRepository) {
        this.templateEngine = templateEngine;
        this.outGoingStudentRepository = outGoingStudentRepository;
        this.applicationErasmusRepository = applicationErasmusRepository;
    }

    public ByteArrayOutputStream generate(HttpServletResponse response, HttpServletRequest request, ServletContext servletContext)throws IOException {

        /* Create HTML using Thymeleaf template Engine */
        ApplicationErasmus application = applicationErasmusRepository.findById(2).orElseThrow();
        WebContext context = new WebContext(request, response, servletContext);
        context.setVariable("app", application);
        String orderHtml = templateEngine.process("tem", context);

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
