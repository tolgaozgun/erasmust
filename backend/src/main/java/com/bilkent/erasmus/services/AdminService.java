package com.bilkent.erasmus.services;

import com.bilkent.erasmus.mappers.OutgoingStudentMapper;
import com.bilkent.erasmus.models.enums.RoleBasedPermission;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudent;
import com.bilkent.erasmus.models.userModels.StudentModels.Student;
import com.bilkent.erasmus.repositories.studentRepository.OutGoingStudentRepository;
import com.bilkent.erasmus.repositories.studentRepository.StudentRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

@Slf4j
@Service
public class AdminService {
    private final OutGoingStudentRepository outGoingStudentRepository;
    private final OutgoingStudentMapper outgoingStudentMapper;
    private final StudentRepository studentRepository;
    private final PasswordEncoder passwordEncoder;


    public AdminService(OutGoingStudentRepository outGoingStudentRepository, OutgoingStudentMapper outgoingStudentMapper, StudentRepository studentRepository, PasswordEncoder passwordEncoder) {
        this.outGoingStudentRepository = outGoingStudentRepository;
        this.outgoingStudentMapper = outgoingStudentMapper;
        this.studentRepository = studentRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void createOutgoingStudent(OutGoingStudent outgoingStudent) {
        outgoingStudent.setPassword(passwordEncoder.encode(outgoingStudent.getPassword()));
        outgoingStudent.setPermission(RoleBasedPermission.ROLE_USER);
        outGoingStudentRepository.save(outgoingStudent);
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }


}
