package com.example.app.backend.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.app.backend.DTO.food.FoodDTO;
import com.example.app.backend.Models.Food;
import com.example.app.backend.Repository.FoodRepository;
import com.example.app.backend.exceptions.DataNotExistException;


@Service
@Transactional
public class FoodService {
     @Autowired
     private FoodRepository foodRepository;

     public FoodService(){

     }
     public FoodService(FoodRepository thFoodRepository){
          foodRepository = thFoodRepository;
     }

     public static FoodDTO getDTOfromFood(Food food){
          FoodDTO foodDTO = new FoodDTO(food);
          return foodDTO;
     }

     public static Food getFoodfromDTO(FoodDTO foodDTO){
          Food foods = new Food(foodDTO);
          return foods;
     }

     public List<FoodDTO> listFoods(){
          List<Food> foods = foodRepository.findAll(); 
          List<FoodDTO> foodDTOs = new ArrayList<>(); 
          for(Food food: foods){
               FoodDTO foodDTO = getDTOfromFood(food);
               foodDTOs.add(foodDTO);
          }
          return foodDTOs;
     }

     public Food addFood(FoodDTO foodDTO){
          Food foods = getFoodfromDTO(foodDTO);
          foodRepository.save(foods);
          return foods;
     }

     public Food getSingleFood(String theId) throws DataNotExistException{
          Food optionalFood = foodRepository.findFoodById(theId);
          if(optionalFood == null){
               throw new DataNotExistException("Món ăn không tồn tại");
          }
          return optionalFood;
     }

     public void deleteFoodById(String theId) throws DataNotExistException{
          Optional<Food> optionalFood = foodRepository.findById(theId);
          if(!optionalFood.isPresent()){
               throw new DataNotExistException("Món ăn không tồn tại");
          }
          foodRepository.deleteById(theId);
     }

     // public void listFoodByRole(Role role){
     //      List<Food> foods = foodRepository.findAll();
     //      List<FoodDTO> foodSearch = new ArrayList<>(); 
     //      for(Food food: foods){
     //           FoodDTO foodDTO = getDTOfromFood(food);
     //           foodDTOs.add(foodDTO);
     //      }
     // }
     


}