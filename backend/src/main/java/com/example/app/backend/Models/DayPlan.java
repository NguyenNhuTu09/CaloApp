package com.example.app.backend.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "dayplans")
public class DayPlan {
     
     @Id
     private String id;

     private String planID;
     private String dayName;
     private String note;
     private Integer caloIn;
     private Integer caloOut;
     private String dayPlanState;
     public DayPlan(String planID, String dayName, String note, Integer caloIn, Integer caloOut,
               String dayPlanState) {
          this.planID = planID;
          this.dayName = dayName;
          this.note = note;
          this.caloIn = caloIn;
          this.caloOut = caloOut;
          this.dayPlanState = dayPlanState;
     }

     public DayPlan(){

     }
     
     public String getId() {
          return id;
     }
     public void setId(String id) {
          this.id = id;
     }
     public String getPlanID() {
          return planID;
     }
     public void setPlanID(String planID) {
          this.planID = planID;
     }
     public String getDayName() {
          return dayName;
     }
     public void setDayName(String dayName) {
          this.dayName = dayName;
     }
     public String getNote() {
          return note;
     }
     public void setNote(String note) {
          this.note = note;
     }
     public Integer getCaloIn() {
          return caloIn;
     }
     public void setCaloIn(Integer caloIn) {
          this.caloIn = caloIn;
     }
     public Integer getCaloOut() {
          return caloOut;
     }
     public void setCaloOut(Integer caloOut) {
          this.caloOut = caloOut;
     }
     public String getDayPlanState() {
          return dayPlanState;
     }
     public void setDayPlanState(String dayPlanState) {
          this.dayPlanState = dayPlanState;
     }

     @Override
     public String toString() {
          return "DayPlan [id=" + id + ", planID=" + planID + ", dayName=" + dayName + ", note=" + note + ", caloIn="
                    + caloIn + ", caloOut=" + caloOut + ", dayPlanState=" + dayPlanState + "]";
     }
}
