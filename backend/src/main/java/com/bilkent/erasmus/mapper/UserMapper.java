package com.bilkent.erasmus.mapper;

import com.bilkent.erasmus.dto.UserDtos.UserDTO;
import com.bilkent.erasmus.models.applicationModels.UserModels.User;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Named;

import java.util.*;

@Mapper(componentModel = "spring")
public interface UserMapper {

    @Named("toUserDTO")
    UserDTO toUserDTO(User user);

    @Named("toEntity")
    User toEntity(UserDTO userDTO);

    @IterableMapping(qualifiedByName = "toUserDTO")
    List<UserDTO> toUserDTOList(List<User> userList);

    @IterableMapping(qualifiedByName = "toEntity")
    List<User> toUserList(List<UserDTO> userDTOList);

}
