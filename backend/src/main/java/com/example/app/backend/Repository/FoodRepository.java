package com.example.app.backend.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.app.backend.Models.Food;
import com.example.app.backend.DTO.food.FoodDTO;
import java.util.List;
import java.util.Optional;

@Repository
public interface FoodRepository extends MongoRepository<Food, String> {
     List<Food> findAll();

     void save(FoodDTO foodDTO);

     Food save(Food food);

     Optional<Food> findById(String theId);
}
