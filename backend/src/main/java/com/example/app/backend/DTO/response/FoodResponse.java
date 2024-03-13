package com.example.app.backend.DTO.response;

import com.example.app.backend.Models.Food;
import com.mongodb.lang.NonNull;

import jakarta.annotation.Nonnull;

public class FoodResponse {
     private @NonNull boolean success;
     private @NonNull String message;
     private @Nonnull Food data;


     public FoodResponse(){

     }
     public FoodResponse(boolean success, String message, Food data) {
          this.success = success;
          this.message = message;
          this.data = data;
     }
     public boolean isSuccess() {
          return success;
     }
     public void setSuccess(boolean success) {
          this.success = success;
     }
     public String getMessage() {
          return message;
     }
     public void setMessage(String message) {
          this.message = message;
     }
     public Food getData() {
          return data;
     }
     public void setData(Food data) {
          this.data = data;
     }
}
