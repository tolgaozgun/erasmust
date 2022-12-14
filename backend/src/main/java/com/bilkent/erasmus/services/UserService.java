package com.bilkent.erasmus.services;

import com.bilkent.erasmus.models.userModels.User;
import com.bilkent.erasmus.repositories.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public User getUserByStarsId(String id) {
        return userRepository.findUserByStarsId(id);
    }
}
