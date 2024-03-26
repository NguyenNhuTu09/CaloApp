package com.example.app.backend.Controller;

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


import com.example.app.backend.Service.FoodService;
import com.example.app.backend.exceptions.DataNotExistException;
import com.example.app.backend.DTO.food.FoodDTO;
import com.example.app.backend.Repository.FoodRepository;
import java.util.List;

import com.example.app.backend.DTO.response.FoodResponse;
import com.example.app.backend.DTO.response.FoodsResponse;
import com.example.app.backend.DTO.response.LikeFoodResponse;
import com.example.app.backend.Models.Food;
import com.example.app.backend.Common.ApiResponse;


@RestController
@RequestMapping("/foods")
public class FoodController {

     @Autowired
     private FoodService foodService;

     @Autowired
     private FoodsResponse foodsResponse;

     @Autowired
     private FoodRepository foodRepository;

     @GetMapping("/")
     public ResponseEntity<FoodsResponse> getFoods(){
          List<FoodDTO> body = foodService.listFoods();
          if(body != null){
               foodsResponse.setSuccess(true);
          }else{
               foodsResponse.setSuccess(false);
          }
          int sizeFoodData = body.size();
          
          foodsResponse.setCount(sizeFoodData);
          foodsResponse.setData(body);
          foodsResponse.setMessage("Danh sách món ăn");
          

          return new ResponseEntity<FoodsResponse>(foodsResponse, HttpStatus.OK);
     }
     @GetMapping("/{foodId}")
     public ResponseEntity<FoodResponse> getSingleFood(@PathVariable("foodId") String foodId){
          return new ResponseEntity<FoodResponse>(new FoodResponse(true, "Successfully", foodService.getSingleFood(foodId)), HttpStatus.OK);
     }

     @PostMapping("/")
     public ResponseEntity<FoodResponse> addFoods(@RequestBody FoodDTO foodDTO){
          return new ResponseEntity<FoodResponse>(new FoodResponse(true, "Tạo món ăn thành công", foodService.addFood(foodDTO)), HttpStatus.CREATED);
     }

     @DeleteMapping("/{foodId}")
     public ResponseEntity<ApiResponse> deleteFood(@PathVariable("foodId") String foodId){
          foodService.deleteFoodById(foodId);
          return new ResponseEntity<ApiResponse>(new ApiResponse(true, "Xóa món ăn thành công"), HttpStatus.OK);
     }


     @PostMapping("/post/like/{foodId}")
     public ResponseEntity<LikeFoodResponse> postLikeFood(@PathVariable("foodId") String foodId, @RequestBody String userId) throws DataNotExistException{

          Food optionalFood = foodRepository.findFoodById(foodId);

          List<String> newLikes = optionalFood.getLikes();

          if(!newLikes.contains(userId)){
               newLikes.add(userId);
          }else{
               newLikes.remove(userId);
          }
          optionalFood.setLikes(newLikes);
          foodRepository.save(optionalFood);

          System.out.println(newLikes);
          for(String data: optionalFood.getLikes()){
               System.out.println(data);
          }

          return new ResponseEntity<LikeFoodResponse>(new LikeFoodResponse(optionalFood.getLikes().size(), optionalFood.getLikes()), HttpStatus.OK);
          
     }
}
