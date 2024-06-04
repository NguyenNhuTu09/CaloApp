package com.example.app.backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.example.app.backend.DTO.food.FoodDTO;
import com.example.app.backend.DTO.response.DataResponse;
import com.example.app.backend.DTO.user.UserIdDto;
import com.example.app.backend.Models.Food;
import com.example.app.backend.Repository.FoodRepository;
import com.example.app.backend.Service.FoodService;
import com.example.app.backend.exceptions.DataNotExistException;


@RestController
@RequestMapping("/foods")
public class FoodController {

     @Autowired
     private FoodService foodService;

     @Autowired
     private FoodRepository foodRepository;

     // GET all Food
     @GetMapping("/")
     public ResponseEntity<DataResponse> getFoods(){ 
          return new ResponseEntity<>(new DataResponse("Danh sách món ăn", 
                                                                 foodService.listFoods().size(), 
                                                                 foodService.listFoods()), 
                                                                 HttpStatus.OK);
     }
     // GET single Food
     @GetMapping("/{foodId}")
     public ResponseEntity<DataResponse> getSingleFood(@PathVariable("foodId") String foodId){
          try{
               return new ResponseEntity<>(new DataResponse("Thông tin món ăn", 
                                                                 foodService.getSingleFood(foodId)), 
                                                                 HttpStatus.OK);
          }catch(DataNotExistException e){
               throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Exercise not found", e);
          }
          
     }
 
     // POST created new Food
     @PostMapping("/")
     public ResponseEntity<DataResponse> addFoods(@RequestBody FoodDTO foodDTO){
          return new ResponseEntity<>(new DataResponse("Tạo món ăn thành công", 
                                                                 foodService.addFood(foodDTO)), HttpStatus.CREATED);
     }

     // Delete Food by Id
     @DeleteMapping("/{foodId}")
     public ResponseEntity<DataResponse> deleteFood(@PathVariable("foodId") String foodId){
          try{
               foodService.deleteFoodById(foodId);
               return new ResponseEntity<>(new DataResponse(true, 
                                                                      "Xóa món ăn thành công"), HttpStatus.OK);
          }catch(DataNotExistException e){
               throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Exercise not found", e);
          }
     }


     // POST like, save Food
     @PostMapping("/post/like/{foodId}")
     public ResponseEntity<DataResponse> postLikeFood(@PathVariable("foodId") String foodId, @RequestBody UserIdDto userIdDto) throws DataNotExistException{
          Food optionalFood = foodRepository.findFoodById(foodId);
          List<String> newLikes = optionalFood.getLikes();
          String userId = userIdDto.getUserId();
          if(!newLikes.contains(userId)){
               newLikes.add(userId);
          }else{
               newLikes.remove(userId);
          }
          optionalFood.setLikes(newLikes);
          foodRepository.save(optionalFood);
 
          return new ResponseEntity<>(new DataResponse(optionalFood.getLikes().size(), optionalFood.getLikes()), HttpStatus.OK);
     }
}
