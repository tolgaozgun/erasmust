package com.bilkent.erasmus.controllers;

import com.bilkent.erasmus.dtos.LoginDTO;
import com.bilkent.erasmus.dtos.RegisterDTO;
import com.bilkent.erasmus.embeddables.ContactInformation;
import com.bilkent.erasmus.models.enums.RoleBasedPermission;
import com.bilkent.erasmus.models.userModels.User;
import com.bilkent.erasmus.repositories.UserRepository;
import com.bilkent.erasmus.security.JwtTokenProvider;
import com.bilkent.erasmus.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserRepository userRepository;
    private AuthenticationManager authenticationManager;
    private JwtTokenProvider jwtTokenProvider;
    private PasswordEncoder passwordEncoder;
    private UserService userService;

    public AuthController(UserRepository userRepository, AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider, PasswordEncoder passwordEncoder, UserService userService) {
        this.userRepository = userRepository;
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
        this.passwordEncoder = passwordEncoder;
        this.userService = userService;
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody LoginDTO login) {
        Map<String, String> returnMap = new HashMap<>();
        String starsId = login.getStarsId();

        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(starsId, login.getPassword());
        Authentication authentication = authenticationManager.authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwtToken = jwtTokenProvider.generateJwtToken(authentication);

        User user = userRepository.findUserByStarsId(starsId);
        RoleBasedPermission role = user.getPermission();
        String roleName = role.getRoleName();

        returnMap.put("role", roleName);
        returnMap.put("token", "Bearer " + jwtToken);

        return returnMap;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterDTO register) {
        if (userService.getUserByStarsId(register.getStarsId()) != null) {
            return new ResponseEntity<>("User name is already in use", HttpStatus.BAD_REQUEST);
        } else {
            User user = new User();
            user.setPassword(passwordEncoder.encode(register.getPassword()));
            user.setFirstName(register.getFirstName());
            user.setLastName(register.getLastName());
            user.setStarsId(register.getStarsId());
            ContactInformation contactInformation = new ContactInformation();
            contactInformation.setEmailPersonal(register.getEmail());
            user.setContactInformation(contactInformation);
            user.setPermission(RoleBasedPermission.ROLE_ADMIN);
            userService.saveUser(user);
            return new ResponseEntity<>("Account is successfully created", HttpStatus.CREATED);
        }
    }

}