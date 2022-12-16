package com.bilkent.erasmus.advice;

import com.bilkent.erasmus.dtos.StorageResponse;
import com.bilkent.erasmus.exceptions.HostCourseFieldException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.multipart.MaxUploadSizeExceededException;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class FieldExceptionHandler {

        @ResponseStatus(HttpStatus.BAD_REQUEST)
        @ExceptionHandler(MethodArgumentNotValidException.class)
        public Map<String, String> handleInvalidArgument(MethodArgumentNotValidException ex) {
            Map<String, String> errorMap = new HashMap<>();
            ex.getBindingResult().getFieldErrors().forEach(error -> {
                errorMap.put(error.getField(), error.getDefaultMessage());
            });
            return errorMap;
        }

        @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
        @ExceptionHandler(HostCourseFieldException.class)
        public Map<String, String> handleBusinessException(HostCourseFieldException ex) {
            Map<String, String> errorMap = new HashMap<>();
            errorMap.put("errorMessage", ex.getMessage());
            errorMap.put("field", ex.getField());
            errorMap.put("courseName", ex.getCourseName());
            return errorMap;
        }
}
