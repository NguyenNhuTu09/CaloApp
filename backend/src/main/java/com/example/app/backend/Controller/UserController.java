package com.example.app.backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.app.backend.DTO.ResponseDto;
import com.example.app.backend.DTO.user.SignInDto;
import com.example.app.backend.DTO.user.SignInResponseDto;
import com.example.app.backend.DTO.user.SignUpDto;
import com.example.app.backend.Models.User;
import com.example.app.backend.Repository.UserRepository;
import com.example.app.backend.Service.AuthenticationService;
import com.example.app.backend.Service.UserService;
import com.example.app.backend.exceptions.AuthenticationFailException;
import com.example.app.backend.exceptions.DataNotExistException;

@RequestMapping("/users")
// @CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class UserController {
     
     @Autowired
     UserRepository userRepository;

     @Autowired 
     AuthenticationService authenticationService;

     @Autowired
     UserService userService;
     
     @PostMapping("/auth/login")
     public SignInResponseDto signIn(@RequestBody SignInDto signInDto) throws DataNotExistException{
          return userService.signIn(signInDto);
     }

     @PostMapping("/auth/register")
     public ResponseDto signUp(@RequestBody SignUpDto signUpDto) throws DataNotExistException{
          return userService.signUp(signUpDto);
     }

     @GetMapping("/")
     public List<User> findAllUser() throws AuthenticationFailException{
          // authenticationService.authenticate(token);
          return userRepository.findAll();
     }

     @GetMapping("/byToken/{token}")
     public User getSingleUserByToken(@PathVariable("token") String token) {
          return authenticationService.getUser(token);
     }

     @GetMapping("/byId/{userId}")
     public User getSingleUserById(@PathVariable("userId") String userId){
          return userService.getSingleUser(userId);
     }


}
