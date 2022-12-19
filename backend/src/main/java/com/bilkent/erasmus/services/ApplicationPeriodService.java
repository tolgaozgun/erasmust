package com.bilkent.erasmus.services;

import com.bilkent.erasmus.exceptions.GenericException;
import com.bilkent.erasmus.models.ApplicationPeriod;
import com.bilkent.erasmus.repositories.ApplicationPeriodRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ApplicationPeriodService {
    private final ApplicationPeriodRepository applicationPeriodRepository;

    public ApplicationPeriodService(ApplicationPeriodRepository applicationPeriodRepository) {
        this.applicationPeriodRepository = applicationPeriodRepository;
    }

    public ApplicationPeriod create(long start, long end) throws GenericException {
        if (applicationPeriodRepository.findByEndDateGreaterThan(System.currentTimeMillis()).isEmpty()) {
            ApplicationPeriod period = new ApplicationPeriod(start,end);
            return applicationPeriodRepository.save(period);
        } else if (start > end) {
            throw new GenericException("End date must be after start date");
        } else{
            throw new GenericException("There is already an open application period");
        }
    }

    public ApplicationPeriod editStart(long start, int id) throws GenericException {
        ApplicationPeriod period = applicationPeriodRepository.findById(id)
                .orElseThrow(() -> new GenericException("Application period does not exist"));
        if(period.getEndDate() < start){
            throw new GenericException("Start date cannot be after end date");
        }
        else {
            period.setStartDate(start);
            applicationPeriodRepository.save(period);
            return period;
        }

    }

    public ApplicationPeriod editEnd(long end, int id) throws GenericException {
        ApplicationPeriod period = applicationPeriodRepository.findById(id)
                .orElseThrow(() -> new GenericException("Application period does not exist"));
        if(period.getStartDate() > end){
            throw new GenericException("End date cannot be before start date");
        }
        else {
            period.setStartDate(end);
            applicationPeriodRepository.save(period);
            return period;
        }

    }

    public Optional<ApplicationPeriod> viewCurrent() throws GenericException {
        try {
            ApplicationPeriod period = applicationPeriodRepository.findByEndDateGreaterThan(System.currentTimeMillis())
                    .orElseThrow(() -> new GenericException("Application period does not exist"));
            return Optional.ofNullable(period);
        }
        catch (GenericException e){
            return null;
        }
    }
}
