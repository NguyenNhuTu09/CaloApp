package com.example.app.backend.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.app.backend.Models.Plan;

@Repository
public interface PlanRepository extends MongoRepository<Plan, String> {
     
     List<Plan> findAll();

     Plan findByUserId(String userId);
     
     Plan findPlanById(String planId);

}
