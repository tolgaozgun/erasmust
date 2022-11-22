package com.bilkent.erasmus.service;

import com.bilkent.erasmus.models.applicationModels.UserModels.StudentModels.Student;
import com.bilkent.erasmus.repository.StudentRepository;
import org.springframework.stereotype.Service;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public Student saveStudent(Student student) {
        return (studentRepository.save(student));
    }

    public Student findStudentByName(String name) {
        return studentRepository.findByFirstName(name);
    }
}
