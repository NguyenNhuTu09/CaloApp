package com.example.app.backend.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.app.backend.Models.DayPlan;

@Repository
public interface DayPlanRepository extends MongoRepository<DayPlan, String> {

     DayPlan findDayPlanById(String theId);

}
