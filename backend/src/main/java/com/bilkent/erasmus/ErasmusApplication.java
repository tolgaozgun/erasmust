package com.bilkent.erasmus;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@Slf4j
@SpringBootApplication
@RestController // put here to test if app is connected to the web
public class ErasmusApplication {

    @GetMapping("") // you can follow this url to check if localhost is running (http://127.0.0.1:8080/message)
    public String getMessage() {
        log.info("bu var");
        return "stable";
    }

    @GetMapping("/handleRequest")
    public ResponseEntity<String> handle() {
        return new ResponseEntity<>("request handled", HttpStatus.OK);
    }

    public static void main(String[] args) {

        SpringApplication.run(ErasmusApplication.class, args);
    }
}
