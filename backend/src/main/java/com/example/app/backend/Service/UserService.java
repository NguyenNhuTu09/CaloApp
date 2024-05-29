package com.example.app.backend.Service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import javax.xml.bind.DatatypeConverter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.app.backend.Config.MessageStrings;
import static com.example.app.backend.Config.MessageStrings.USER_CREATED;
import com.example.app.backend.DTO.ResponseDto;
import com.example.app.backend.DTO.user.SignInDto;
import com.example.app.backend.DTO.user.SignInResponseDto;
import com.example.app.backend.DTO.user.SignUpDto;
import com.example.app.backend.DTO.user.UserCreatedDto;
import com.example.app.backend.Models.AuthenticationToken;
import com.example.app.backend.Models.User;
import com.example.app.backend.Repository.UserRepository;
import com.example.app.backend.Utils.Helper;
import com.example.app.backend.enums.ResponseStatus;
import com.example.app.backend.enums.Role;
import com.example.app.backend.exceptions.AuthenticationFailException;
import com.example.app.backend.exceptions.CustomException;

@Service
public class UserService {
     
     @Autowired
     UserRepository userRepository; 

     @Autowired
     AuthenticationService authenticationService;

     Logger logger = LoggerFactory.getLogger(UserService.class);

     public ResponseDto signUp(SignUpDto signUpDto) throws CustomException{
          if(Helper.notNull(userRepository.findByEmail(signUpDto.getEmail()))){ 
               throw new CustomException("User already exists");
          }
          String encryptedPassword = signUpDto.getPassword(); 

          try { 
               encryptedPassword = hashPassword(signUpDto.getPassword()); 
          }catch(NoSuchAlgorithmException e){     
               logger.error("hashing password failed {}", e.getMessage());
          }

          User user = new User(signUpDto.getLastFirstName(), 
                              signUpDto.getEmail(), 
                              encryptedPassword, 
                              signUpDto.getUserName(),
                              signUpDto.getDate(),
                              signUpDto.getPhone(),
                              signUpDto.getGender(),
                              signUpDto.getAddress(),
                              signUpDto.getAvatar(),
                              Role.User
                         ); 
          User createdUser;
          try{
               createdUser = userRepository.save(user); 
               System.out.println(createdUser);
               final AuthenticationToken authenticationToken = new AuthenticationToken(createdUser);  
               authenticationService.saveConfirmationToken(authenticationToken);
               return new ResponseDto(ResponseStatus.success.toString(), USER_CREATED);
          }catch(Exception e){
               throw new CustomException(e.getMessage());
          }

     }

     public SignInResponseDto signIn(SignInDto signInDto) throws CustomException{
          User user = userRepository.findByEmail(signInDto.getEmail());
          if(!Helper.notNull(user)){ 
               throw new AuthenticationFailException("User is not present");
          }
          try{
               if(!user.getPassword().equals(hashPassword(signInDto.getPassword()))){ 
                    throw new AuthenticationFailException(MessageStrings.WRONG_PASSWORD);
               }
          }catch(NoSuchAlgorithmException e){
               logger.error("hashing password failed {}", e);
               throw new CustomException(e.getMessage());
          }

          AuthenticationToken token = authenticationService.getToken(user);

          if(!Helper.notNull(token)){
               throw new CustomException("Token not present");
          }

          // System.out.println(user);

          return new SignInResponseDto("Success", token.getToken());
     }

     String hashPassword(String password) throws NoSuchAlgorithmException {
          MessageDigest md = MessageDigest.getInstance("MD5");
          md.update(password.getBytes());
          byte[] digest = md.digest();
          String myHash = DatatypeConverter.printHexBinary(digest).toUpperCase();
          return myHash;
     }

     public ResponseDto createUser(String token, UserCreatedDto userCreatedDto) throws CustomException, AuthenticationFailException{
          User creatingUser = authenticationService.getUser(token);
          if(!canCrudUser(creatingUser.getRole())){
               throw new AuthenticationFailException(MessageStrings.USER_NOT_PERMITTED);
          }
          String encryptedPassword = userCreatedDto.getPassword();
          try{
               encryptedPassword = hashPassword(userCreatedDto.getPassword());
          }catch(NoSuchAlgorithmException e){
               logger.error("hashing password failed", e.getMessage());
          }

          User user = new User(userCreatedDto.getLastFirstName(), 
                              userCreatedDto.getEmail(), 
                              encryptedPassword, 
                              userCreatedDto.getUserName(),
                              userCreatedDto.getDate(),
                              userCreatedDto.getPhone(),
                              userCreatedDto.getGender(),
                              userCreatedDto.getAddress(),
                              userCreatedDto.getAvatar(),
                              userCreatedDto.getRole()
                         );
          User createdUser;
          try{
               createdUser = userRepository.save(user);
               final AuthenticationToken authenticationToken = new AuthenticationToken(createdUser);
               authenticationService.saveConfirmationToken(authenticationToken);
               return new ResponseDto(ResponseStatus.success.toString(), USER_CREATED);
          }catch(Exception e){
               throw new CustomException(e.getMessage());
          }

     }

     boolean canCrudUser(Role role){
          if(role == Role.Admin || role == Role.Manager){
               return true;
          }
          return false;
     }

     public User getSingleUser(String theId) throws CustomException{
          User user = userRepository.findUserById(theId);
          System.out.println(user);
          if(!Helper.notNull(user)){ 
               throw new AuthenticationFailException("User is not present");
          }
          return user;
     }


}
