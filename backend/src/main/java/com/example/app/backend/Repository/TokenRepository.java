package com.example.app.backend.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.app.backend.Models.AuthenticationToken;
import com.example.app.backend.Models.User;

@Repository
public interface TokenRepository extends MongoRepository<AuthenticationToken, String> {
     AuthenticationToken findTokenByUser(User user);
     AuthenticationToken findTokenByToken(String token);
}
