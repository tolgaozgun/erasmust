package com.bilkent.erasmus.services;

import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudentErasmus;
import com.bilkent.erasmus.repositories.studentRepository.OutGoingStudentErasmusRepository;
import org.springframework.stereotype.Service;

@Service
public class OutGoingStudentService {

    private final OutGoingStudentErasmusRepository outGoingStudentErasmusRepository;

    public OutGoingStudentService(OutGoingStudentErasmusRepository outGoingStudentErasmusRepository) {
        this.outGoingStudentErasmusRepository = outGoingStudentErasmusRepository;
    }

    public OutGoingStudentErasmus saveErasmusStudent(OutGoingStudentErasmus studentErasmus) {
        return (outGoingStudentErasmusRepository.save(studentErasmus));
    }
}
