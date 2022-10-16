package com.bilkent.erasmus;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController // put here to test if app is connected to the web
public class ErasmusApplication {

    @GetMapping("/message") // you can follow this url to check if localhost is running (http://127.0.0.1:8080/message)
    public String getMessage() {
        return "stable";
    }
    public static void main(String[] args) {
        SpringApplication.run(ErasmusApplication.class, args);
    }

}
