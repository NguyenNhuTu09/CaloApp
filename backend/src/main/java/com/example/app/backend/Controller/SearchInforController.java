package com.example.app.backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.app.backend.Models.Food;
import com.example.app.backend.Repository.FoodRepository;
import com.example.app.backend.Service.FoodService;
import com.example.app.backend.Service.UserService;


@RestController
@RequestMapping("/search")
public class SearchInforController {
    
    @Autowired
    private FoodService foodService;

    @Autowired
    private FoodRepository foodRepository;

    @Autowired
    private UserService userService;


    @GetMapping("/foods")
    public List<Food> searchFoods(@RequestParam String nameFood) {
        return foodRepository.findByNameFoodContainingIgnoreCase(nameFood);
    }
    
}
