package com.example.app.backend.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.app.backend.DTO.food.FoodDTO;
import com.example.app.backend.Models.Food;


@Repository
public interface FoodRepository extends MongoRepository<Food, String> {

     void save(FoodDTO foodDTO);

     Food findFoodById(String id);


}



