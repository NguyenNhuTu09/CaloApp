package com.example.app.backend.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.app.backend.Models.DayPlan;
import java.util.List;

@Repository
public interface DayPlanRepository extends MongoRepository<DayPlan, String> {

     List<DayPlan> findAll();

}
