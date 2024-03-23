package com.example.app.backend.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.cloudinary.Cloudinary;
import com.example.app.backend.DTO.response.ExerResponse;
import com.example.app.backend.DTO.response.ResponseDayPlan;
import com.example.app.backend.DTO.response.ExersResponse;
import com.example.app.backend.DTO.response.FoodResponse;
import com.example.app.backend.DTO.response.FoodsResponse;

@Configuration
public class sportConfig {
     
     @Bean("foodsResponse")
     public FoodsResponse foodsResponse(){
          return new FoodsResponse();
     }

     @Bean("exersResponse")
     public ExersResponse exersResponse(){
          return new ExersResponse();
     }

     @Bean("foodResponse")
     public FoodResponse foodResponse(){
          return new FoodResponse();
     }

     @Bean("exerResponse")
     public ExerResponse exerResponse(){
          return new ExerResponse();
     }

     @Bean("responseDayPlan")
     public ResponseDayPlan responseDayPlan(){
          return new ResponseDayPlan();
     }

     @Bean
     public Cloudinary getCloudinary(){
          return new Cloudinary("cloudinary://749332554812144:nz5Sg21DZI5JLkT2l9TQa86t5e8@dozs7ggs4");
     }
}
