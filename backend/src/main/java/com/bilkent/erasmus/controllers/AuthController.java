package com.bilkent.erasmus.controllers;

import com.bilkent.erasmus.dtos.*;
import com.bilkent.erasmus.embeddables.ContactInformation;
import com.bilkent.erasmus.enums.RoleBasedPermission;
import com.bilkent.erasmus.exceptions.PasswordException;

import com.bilkent.erasmus.models.userModels.StudentModels.OutGoingStudent;
import com.bilkent.erasmus.models.userModels.User;
import com.bilkent.erasmus.repositories.CourseCoordinatorRepository;
import com.bilkent.erasmus.repositories.ExchangeCoordinatorRepository;
import com.bilkent.erasmus.repositories.UserRepository;
import com.bilkent.erasmus.repositories.studentRepository.OutGoingStudentRepository;
import com.bilkent.erasmus.security.JwtTokenProvider;
import com.bilkent.erasmus.services.UserService;
import lombok.extern.slf4j.Slf4j;
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

import javax.persistence.EntityNotFoundException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
@Slf4j
public class AuthController {

    private final UserRepository userRepository;
    private final OutGoingStudentRepository outGoingStudentRepository;
    private final ExchangeCoordinatorRepository exchangeCoordinatorRepository;
    private final CourseCoordinatorRepository courseCoordinatorRepository;
    private AuthenticationManager authenticationManager;
    private JwtTokenProvider jwtTokenProvider;
    private PasswordEncoder passwordEncoder;
    private UserService userService;

    public AuthController(UserRepository userRepository
            , OutGoingStudentRepository outGoingStudentRepository
            , ExchangeCoordinatorRepository exchangeCoordinatorRepository
            , CourseCoordinatorRepository courseCoordinatorRepository
            , AuthenticationManager authenticationManager
            , JwtTokenProvider jwtTokenProvider
            , PasswordEncoder passwordEncoder
            , UserService userService) {
        this.userRepository = userRepository;
        this.outGoingStudentRepository = outGoingStudentRepository;
        this.exchangeCoordinatorRepository = exchangeCoordinatorRepository;
        this.courseCoordinatorRepository = courseCoordinatorRepository;
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
        this.passwordEncoder = passwordEncoder;
        this.userService = userService;
    }

    @PostMapping("/login")
    public Object login(@RequestBody LoginDTO login) throws Exception {
        Map<String, String> returnMap = new HashMap<>();
        String starsId = login.getStarsId();

        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(starsId, login.getPassword());
        Authentication authentication = authenticationManager.authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwtToken = jwtTokenProvider.generateJwtToken(authentication);

        User user = userRepository.findUserByStarsId(starsId);
        log.info("starsID: " + user.getStarsId());
        RoleBasedPermission role = user.getPermission();
        String roleName = role.getRoleName();
        if (roleName.equals("STUDENT")) {
            OutGoingStudent student = outGoingStudentRepository.findByStarsId(starsId)
                    .orElseThrow(() -> new EntityNotFoundException("no user is available"));
            LoginStudentResponseDTO loginResponse = LoginStudentResponseDTO.builder()
                    .academicYear(student.getAcademicYear())
                    .role(user.getPermission().getRoleName())
                    .token("Bearer " + jwtToken)
                    .starsId(starsId)
                    .department(student.getDepartmentName().toString())
                    .semester(student.getSemester())
                    .firstName(student.getFirstName())
                    .lastName(student.getLastName()).build();
            return loginResponse;
        }
        else if (roleName.equals("ADMIN")) {
            AdminLoginResponseDTO loginResponse = AdminLoginResponseDTO.builder()
                    .starsId(starsId)
                    .firstName(user.getFirstName())
                    .lastName(user.getLastName())
                    .role(user.getPermission().getRoleName())
                    .token("Bearer " + jwtToken)
                    .build();
            return  loginResponse;
        }
        else if (roleName.equals("ERASMUS_COORDINATOR")) {
            LoginCourseCoordinatorDTO loginResponse = LoginCourseCoordinatorDTO.builder()
                    .firstName(user.getFirstName())
                    .lastName(user.getLastName())
                    .starsId(user.getStarsId())
                    .role(user.getPermission().getRoleName())
                    .token("Bearer " + jwtToken)
                    .build();
            return  loginResponse;
        }
        else if (roleName.equals("COURSE_COORDINATOR")) {
            LoginExchangeCoordinatorDTO loginResponse = LoginExchangeCoordinatorDTO.builder()
                    .firstName(user.getFirstName())
                    .lastName(user.getLastName())
                    .starsId(user.getStarsId())
                    .role(user.getPermission().getRoleName())
                    .token("Bearer " + jwtToken)
                    .build();
            return  loginResponse;
        }
        else {
            throw new Exception("there is no related type");
        }
/*

        returnMap.put("firstName", user.getFirstName());
        returnMap.put("lastName", user.getLastName());
        returnMap.put("starsId", user.getStarsId());
        returnMap.put("role", roleName);
        returnMap.put("token", "Bearer " + jwtToken);

        return returnMap;
*/

        // name
        // lastname
        // starsId
        // department
        // academicYear
        // semester
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

    @PostMapping("/change-password")
    public ResponseEntity<?> changePassword(@RequestBody Map<String, String> json) throws Exception {

        userService.changePassword(json.get("newPassword"),
                json.get("oldPassword"), json.get("confirmationPassword"));
        return new ResponseEntity<>("Password changed successfully", HttpStatus.OK);
    }

}