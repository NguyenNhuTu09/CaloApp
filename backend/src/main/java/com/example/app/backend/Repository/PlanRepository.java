package com.example.app.backend.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.app.backend.Models.Plan;
import java.util.List;

@Repository
public interface PlanRepository extends MongoRepository<Plan, String> {
     
     List<Plan> findAll();

     Plan findByUserId(String userId);

}
