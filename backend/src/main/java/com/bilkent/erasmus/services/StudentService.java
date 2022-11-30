package com.bilkent.erasmus.services;

import com.bilkent.erasmus.models.userModels.StudentModels.Student;
import com.bilkent.erasmus.repositories.studentRepository.StudentRepository;
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
