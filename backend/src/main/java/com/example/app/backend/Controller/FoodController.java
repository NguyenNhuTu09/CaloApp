package com.example.app.backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.app.backend.Service.FoodService;
import com.example.app.backend.DTO.food.FoodDTO;
import java.util.List;

import com.example.app.backend.DTO.response.FoodResponse;
import com.example.app.backend.DTO.response.FoodsResponse;

@RestController
@RequestMapping("/foods")
public class FoodController {

     @Autowired
     private FoodService foodService;

     @Autowired
     private FoodsResponse foodsResponse;

     @Autowired
     private FoodResponse foodResponse;


     @GetMapping("/")
     public ResponseEntity<FoodsResponse> getFoods(){
          List<FoodDTO> body = foodService.listFoods();
          if(body != null){
               foodsResponse.setSuccess(true);
          }else{
               foodsResponse.setSuccess(false);
          }
          Integer i = 0;
          for(FoodDTO foodDTO: body){
               i++;
          }
          foodsResponse.setCount(i);
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
     
}
