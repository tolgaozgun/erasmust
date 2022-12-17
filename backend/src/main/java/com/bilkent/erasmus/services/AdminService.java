package com.bilkent.erasmus.services;

import com.bilkent.erasmus.mappers.OutgoingStudentMapper;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.ApplicationErasmus;
import com.bilkent.erasmus.enums.RoleBasedPermission;
import com.bilkent.erasmus.enums.Status;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.PreApprovalFormErasmus;
import com.bilkent.erasmus.models.applicationModels.PreApprovalForms.PreApprovalFormNew;
import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudent;
import com.bilkent.erasmus.models.userModels.StudentModels.Student;
import com.bilkent.erasmus.repositories.PreApprovalFormRepositories.PreApprovalFormRepositoryNew;
import com.bilkent.erasmus.repositories.applicationRepositories.ApplicationErasmusRepository;
import com.bilkent.erasmus.repositories.applicationRepositories.PreApprovalFormErasmusRepository;
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
    private final ApplicationErasmusRepository applicationErasmusRepository;
    private final PreApprovalFormRepositoryNew preApprovalFormRepositoryNew;

    public AdminService(OutGoingStudentRepository outGoingStudentRepository, OutgoingStudentMapper outgoingStudentMapper,
                        StudentRepository studentRepository, PasswordEncoder passwordEncoder, ApplicationErasmusRepository applicationErasmusRepository, PreApprovalFormRepositoryNew preApprovalFormRepositoryNew) {
        this.outGoingStudentRepository = outGoingStudentRepository;
        this.outgoingStudentMapper = outgoingStudentMapper;
        this.studentRepository = studentRepository;
        this.passwordEncoder = passwordEncoder;
        this.applicationErasmusRepository = applicationErasmusRepository;
        this.preApprovalFormRepositoryNew = preApprovalFormRepositoryNew;
    }

    public void createOutgoingStudent(OutGoingStudent outgoingStudent) {
        outgoingStudent.setPassword(passwordEncoder.encode(outgoingStudent.getPassword()));
        outgoingStudent.setPermission(RoleBasedPermission.ROLE_USER);
        outGoingStudentRepository.save(outgoingStudent);
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
    public List<ApplicationErasmus> getAllErasmusApplications() {
        return applicationErasmusRepository.findAll();
    }
    public List<ApplicationErasmus> getAllErasmusApplicationsByStatus(String status) {
        Status stat = Status.valueOf(status);
        return applicationErasmusRepository.findAllByStatus(stat);
    }
    public List<ApplicationErasmus> getAllErasmusApplicationsByCoordinator(String id, String status) {
        if (status == null) {
            return applicationErasmusRepository.findAllByCoordinator_StarsId(id);
        }
        else {
            Status stat = Status.valueOf(status);
            return applicationErasmusRepository.findAllByCoordinator_StarsIdAndStatus(id, stat);
        }

    }

    public List<ApplicationErasmus> getAllErasmusApplicationsStudentStarsId(String id, String status) {
        if (status == null) {
            return applicationErasmusRepository.findAllByStudent_StarsId(id);
        } else {
            Status stat = Status.valueOf(status);
            return applicationErasmusRepository.findAllByStudent_StarsIdAndStatus(id, stat);
        }
    }

    public Student getStudentByStarsId(String id) {
        return studentRepository.findByStarsId(id);
    }
    public List<PreApprovalFormNew> getAllPreapprovalErasmus(){
        return preApprovalFormRepositoryNew.findAll();
    }


}
