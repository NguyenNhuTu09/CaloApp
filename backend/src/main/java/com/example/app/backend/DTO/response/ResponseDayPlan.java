package com.example.app.backend.DTO.response;

import java.util.List;
import com.example.app.backend.Models.DayPlan;

public class ResponseDayPlan {
     private Boolean success;
     private String message;
     private List<DayPlan> data;
     public ResponseDayPlan(){
          
     }
     public ResponseDayPlan(Boolean success, String message, List<DayPlan> data) {
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
     public List<DayPlan> getListDayPlan() {
          return data;
     }
     public void setListDayPlan(List<DayPlan> data) {
          this.data = data;
     }
}
