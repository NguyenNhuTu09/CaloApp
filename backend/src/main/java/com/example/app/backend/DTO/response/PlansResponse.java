package com.example.app.backend.DTO.response;

import com.example.app.backend.Models.Plan;
import java.util.List;

public class PlansResponse {
     
     private Boolean success;
     private String message;
     private List<Plan> data;
     public PlansResponse(){
          
     }
     public PlansResponse(Boolean success, String message, List<Plan> data) {
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
     public List<Plan> getData() {
          return data;
     }
     public void setData(List<Plan> data) {
          this.data = data;
     }
}
