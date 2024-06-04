package com.example.app.backend.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.app.backend.Models.Plan;

@Repository
public interface PlanRepository extends MongoRepository<Plan, String> {
     
     Plan findByUserId(String userId);
     
     Plan findPlanById(String planId);

}
