package com.example.app.backend.Models;
import java.util.Date;

public class DateCreate{
     private Date createdAt;
     private Date updatedAt;
     public DateCreate(Date createdAt, Date updatedAt) {
          this.createdAt = createdAt;
          this.updatedAt = updatedAt;
     }

     public DateCreate(){
          this.createdAt = new Date();
          this.updatedAt = new Date();
     }

     public Date getCreatedAt() {
          return createdAt;
     }
     public void setCreatedAt(Date createdAt) {
          this.createdAt = createdAt;
     }
     public Date getUpdatedAt() {
          return updatedAt;
     }
     public void setUpdatedAt(Date updatedAt) {
          this.updatedAt = updatedAt;
     }
}
