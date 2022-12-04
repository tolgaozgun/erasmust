package com.bilkent.erasmus.mappers.InitialApplicationMappper;

import com.bilkent.erasmus.dtos.InitialApplicationDTO.PreApprovalFormDTO;
import com.bilkent.erasmus.models.applicationModels.InitialApplicationModels.PreApprovalForm;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-12-03T20:46:35+0300",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.7 (Amazon.com Inc.)"
)
@Component
public class PreApprovalFormMapperImpl implements PreApprovalFormMapper {

    @Override
    public PreApprovalFormDTO toPreApprovalFormDTO(PreApprovalForm form) {
        if ( form == null ) {
            return null;
        }

        PreApprovalFormDTO preApprovalFormDTO = new PreApprovalFormDTO();

        preApprovalFormDTO.setId( form.getId() );
        preApprovalFormDTO.setAcademicYear( form.getAcademicYear() );
        preApprovalFormDTO.setSemester( form.getSemester() );

        return preApprovalFormDTO;
    }

    @Override
    public PreApprovalForm toEntity(PreApprovalFormDTO form) {
        if ( form == null ) {
            return null;
        }

        PreApprovalForm preApprovalForm = new PreApprovalForm();

        preApprovalForm.setId( form.getId() );
        preApprovalForm.setAcademicYear( form.getAcademicYear() );
        preApprovalForm.setSemester( form.getSemester() );

        return preApprovalForm;
    }

    @Override
    public List<PreApprovalFormDTO> toPreApprovalFormDTOList(List<PreApprovalForm> formList) {
        if ( formList == null ) {
            return null;
        }

        List<PreApprovalFormDTO> list = new ArrayList<PreApprovalFormDTO>( formList.size() );
        for ( PreApprovalForm preApprovalForm : formList ) {
            list.add( toPreApprovalFormDTO( preApprovalForm ) );
        }

        return list;
    }

    @Override
    public List<PreApprovalForm> toEntityList(List<PreApprovalFormDTO> formList) {
        if ( formList == null ) {
            return null;
        }

        List<PreApprovalForm> list = new ArrayList<PreApprovalForm>( formList.size() );
        for ( PreApprovalFormDTO preApprovalFormDTO : formList ) {
            list.add( toEntity( preApprovalFormDTO ) );
        }

        return list;
    }
}
