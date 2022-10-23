package com.bilkent.erasmus.service;

import com.bilkent.erasmus.dto.UserDTO;
import com.bilkent.erasmus.entity.User;
import com.bilkent.erasmus.enums.Department;
import com.bilkent.erasmus.mapper.UserMapper;
import com.bilkent.erasmus.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserMapper userMapper;

    private final UserRepository userRepository;

    public UserService(UserMapper userMapper, UserRepository userRepository) {
        this.userMapper = userMapper;
        this.userRepository = userRepository;
    }

    public UserDTO save(UserDTO userDTO) {

        User user = userMapper.toEntity(userDTO);
        user.setDepartment(Department.ROLE_USER);
        user.setStatus(Boolean.TRUE);
        return userMapper.toUserDTO(userRepository.save(user));
    }
}
