package com.example.app.backend.DTO.response;

import com.example.app.backend.DTO.exercise.ExerciseDTO;
import java.util.List;


public class ExersResponse {

     private boolean success;
     private String message;
     private int count;
     private List<ExerciseDTO> data;

     public ExersResponse(){}

     public ExersResponse(boolean success, String message, int count, List<ExerciseDTO> data) {
          this.success = success;
          this.message = message;
          this.count = count;
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
     public int getCount() {
          return count;
     }
     public void setCount(int count) {
          this.count = count;
     }
     public List<ExerciseDTO> getData() {
          return data;
     }
     public void setData(List<ExerciseDTO> data) {
          this.data = data;
     }
}
