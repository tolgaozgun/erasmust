package com.bilkent.erasmus.controllers;

import com.bilkent.erasmus.services.PDFGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;

@Controller
@RequestMapping("/pdf")
public class PDFGeneratorController {
    private final PDFGeneratorService pdfGeneratorService;

    public PDFGeneratorController(PDFGeneratorService pdfGeneratorService) {
        this.pdfGeneratorService = pdfGeneratorService;
    }
    @Autowired
    ServletContext servletContext;

    @GetMapping("/a")
    public ResponseEntity<?> generate(@RequestBody Map<String, String> json, HttpServletResponse response, HttpServletRequest request) throws IOException {
        response.setContentType("application/pdf");
        ByteArrayOutputStream target = pdfGeneratorService.generate(response,request, servletContext, json.get("student"));

        byte[] bytes = target.toByteArray();
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=order.pdf")
                .contentType(MediaType.APPLICATION_PDF)
                .body(bytes);
    }
}
