package com.example.app.backend.DTO.response;

import com.example.app.backend.Models.Plan;

public class PlanResponse {
     private Boolean success;
     private String message;
     private Plan data;
     public PlanResponse(){
          
     }
     public PlanResponse(Boolean success, String message, Plan data) {
          this.success = success;
          this.message = message;
          this.data = data;
     }
     public Boolean getSuccess() {
          return success;
     }
     public void setSuccess(Boolean success) {
          this.success = success;
     }
     public String getMessage() {
          return message;
     }
     public void setMessage(String message) {
          this.message = message;
     }
     public Plan getData() {
          return data;
     }
     public void setData(Plan data) {
          this.data = data;
     }
}
