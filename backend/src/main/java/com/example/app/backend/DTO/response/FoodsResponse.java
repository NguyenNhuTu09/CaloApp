package com.example.app.backend.DTO.response;

import java.util.List;
import com.example.app.backend.DTO.food.FoodDTO;
import com.mongodb.lang.NonNull;

import jakarta.annotation.Nonnull;

public class FoodsResponse {
     private @NonNull boolean success;
     private @NonNull int count;
     private @NonNull String message;
     private @Nonnull List<FoodDTO> data;


     public FoodsResponse(){

     }
     public FoodsResponse(boolean success, int count, String message, List<FoodDTO> data) {
          this.success = success;
          this.message = message;
          this.data = data;
          this.count = count;
     }
     public boolean isSuccess() {
          return success;
     }
     public void setSuccess(boolean success) {
          this.success = success;
     }
     public int getCount() {
          return count;
     }
     public void setCount(int count) {
          this.count = count;
     }
     public String getMessage() {
          return message;
     }
     public void setMessage(String message) {
          this.message = message;
     }
     public List<FoodDTO> getData() {
          return data;
     }
     public void setData(List<FoodDTO> data) {
          this.data = data;
     }
}
