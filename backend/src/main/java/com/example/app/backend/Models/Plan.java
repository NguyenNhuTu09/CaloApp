package com.example.app.backend.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "plans")
public class Plan {
     
     @Id
     private String id;

     private String userId;
     private String planName;
     private String dayStart;
     private String dayEnd;
     private String descPlan;
     private String planState;



     public Plan(String id, String userId, String planName, String dayStart, String dayEnd, String descPlan,
               String planState) {
          this.id = id;
          this.userId = userId;
          this.planName = planName;
          this.dayStart = dayStart;
          this.dayEnd = dayEnd;
          this.descPlan = descPlan;
          this.planState = planState;
     }

     public Plan(){
     }

     public String getId() {
          return id;
     }
     public void setId(String id) {
          this.id = id;
     }
     public String getUserId() {
          return userId;
     }
     public void setUserId(String userId) {
          this.userId = userId;
     }
     public String getPlanName() {
          return planName;
     }
     public void setPlanName(String planName) {
          this.planName = planName;
     }
     public String getDayStart() {
          return dayStart;
     }
     public void setDayStart(String dayStart) {
          this.dayStart = dayStart;
     }
     public String getDayEnd() {
          return dayEnd;
     }
     public void setDayEnd(String dayEnd) {
          this.dayEnd = dayEnd;
     }
     public String getDescPlan() {
          return descPlan;
     }
     public void setDescPlan(String descPlan) {
          this.descPlan = descPlan;
     }
     public String getPlanState() {
          return planState;
     }
     public void setPlanState(String planState) {
          this.planState = planState;
     }
     

     @Override
     public String toString() {
          return "Plan [id=" + id + ", userId=" + userId + ", planName=" + planName + ", dayStart=" + dayStart
                    + ", dayEnd=" + dayEnd + ", descPlan=" + descPlan + ", planState=" + planState + "]";
     }

}
