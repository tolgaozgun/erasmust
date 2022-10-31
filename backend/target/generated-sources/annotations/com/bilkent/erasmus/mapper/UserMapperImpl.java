package com.bilkent.erasmus.mapper;

import com.bilkent.erasmus.dto.UserDTO;
import com.bilkent.erasmus.entity.User;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-10-22T20:21:17+0300",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.7 (Amazon.com Inc.)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public UserDTO toUserDTO(User user) {
        if ( user == null ) {
            return null;
        }

        UserDTO userDTO = new UserDTO();

        userDTO.setId( user.getId() );
        userDTO.setStarsID( user.getStarsID() );
        userDTO.setName( user.getName() );
        userDTO.setSurname( user.getSurname() );
        userDTO.setEmail( user.getEmail() );
        userDTO.setDepartment( user.getDepartment() );
        userDTO.setStatus( user.getStatus() );

        return userDTO;
    }

    @Override
    public User toEntity(UserDTO userDTO) {
        if ( userDTO == null ) {
            return null;
        }

        User user = new User();

        user.setId( userDTO.getId() );
        user.setStarsID( userDTO.getStarsID() );
        user.setName( userDTO.getName() );
        user.setSurname( userDTO.getSurname() );
        user.setEmail( userDTO.getEmail() );
        user.setDepartment( userDTO.getDepartment() );
        user.setStatus( userDTO.getStatus() );

        return user;
    }

    @Override
    public List<UserDTO> toUserDTOList(List<User> userList) {
        if ( userList == null ) {
            return null;
        }

        List<UserDTO> list = new ArrayList<UserDTO>( userList.size() );
        for ( User user : userList ) {
            list.add( toUserDTO( user ) );
        }

        return list;
    }

    @Override
    public List<User> toUserList(List<UserDTO> userDTOList) {
        if ( userDTOList == null ) {
            return null;
        }

        List<User> list = new ArrayList<User>( userDTOList.size() );
        for ( UserDTO userDTO : userDTOList ) {
            list.add( toEntity( userDTO ) );
        }

        return list;
    }
}
