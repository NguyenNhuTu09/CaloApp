package com.example.app.backend.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.example.app.backend.Models.User;
import java.util.*;


@Repository
public interface UserRepository extends MongoRepository<User, String> {

     List<User> findAll();

     User findByEmail(String email);
     
     User findUserByEmail(String email);
} 
