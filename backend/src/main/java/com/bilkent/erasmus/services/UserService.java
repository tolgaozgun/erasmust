package com.bilkent.erasmus.services;

import com.bilkent.erasmus.exceptions.PasswordException;

import com.bilkent.erasmus.models.userModels.User;
import com.bilkent.erasmus.repositories.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;


@Service
@Slf4j
public class UserService {
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

    public UserService(PasswordEncoder passwordEncoder, UserRepository userRepository) {
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public User getUserByStarsId(String id) {
        return userRepository.findUserByStarsId(id);
    }

    public void changePassword(String newPassword, String oldPassword, String confirmPassword) throws PasswordException {
        User currentUser = userRepository.findUserByStarsId(SecurityContextHolder.getContext().getAuthentication().getName());
        if (newPassword == null | oldPassword == null | confirmPassword == null) {
            throw new PasswordException("All fields must be filled");
        }
        else {
            if (passwordEncoder.matches(oldPassword, currentUser.getPassword())) {
                if (passwordEncoder.matches(newPassword,currentUser.getPassword())) {
                    throw new PasswordException("New password cannot be same with current password");
                }
                else {
                    if (newPassword.equals(confirmPassword)) {
                        currentUser.setPassword(passwordEncoder.encode(newPassword));
                        userRepository.save(currentUser);
                    } else {
                        throw new PasswordException("Confirmation password does not match new password");
                    }
                }
            } else {
                throw new PasswordException("Entered password does not match current password");

    public void changePassword(String newPassword, String oldPassword, String confirmPassword) throws PasswordsDoNotMatchException {
        User currentUser = userRepository.findUserByStarsId(SecurityContextHolder.getContext().getAuthentication().getName());
        if (newPassword == null | oldPassword == null | confirmPassword == null) {
            throw new PasswordsDoNotMatchException("All fields must be filled");
        }
        else {
            if (passwordEncoder.matches(oldPassword, currentUser.getPassword())) {
                if (newPassword.equals(confirmPassword)) {
                    currentUser.setPassword(passwordEncoder.encode(newPassword));
                } else {
                    throw new PasswordsDoNotMatchException("Confirmation password does not match new password");
                }
            } else {
                throw new PasswordsDoNotMatchException("Entered password does not match current password");
            }

        }
    }
}
