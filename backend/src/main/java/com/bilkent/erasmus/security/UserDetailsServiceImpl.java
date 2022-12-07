package com.bilkent.erasmus.security;

import com.bilkent.erasmus.models.userModels.User;
import com.bilkent.erasmus.repositories.UserRepository;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.lang.model.type.ErrorType;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    public UserDetailsServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String starsId) throws UsernameNotFoundException {
        User user = userRepository.findUserByStarsId(starsId);
        return JwtUserDetails.create(user);
    }

    public UserDetails loadByUserId(int id) throws Exception {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found by id:" + id));
        if (user == null) {
            throw new Exception("INVALID_REQUEST");
        }
        return JwtUserDetails.create(user);
    }


}
