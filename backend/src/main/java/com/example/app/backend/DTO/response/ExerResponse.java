package com.example.app.backend.DTO.response;

import com.example.app.backend.Models.Exercise;

public class ExerResponse {
     
     private boolean success;
     private String message;
     private Exercise data;

     public ExerResponse(){
          
     }

     public ExerResponse(boolean success, String message, Exercise data) {
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
     public Exercise getData() {
          return data;
     }
     public void setData(Exercise data) {
          this.data = data;
     }
}
