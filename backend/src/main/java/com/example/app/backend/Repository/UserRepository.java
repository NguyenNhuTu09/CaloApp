package com.example.app.backend.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.app.backend.Models.User;


@Repository
public interface UserRepository extends MongoRepository<User, String> {

     User findByEmail(String email);
     
     User findUserByEmail(String email);

     User findUserById(String theId);
} 
