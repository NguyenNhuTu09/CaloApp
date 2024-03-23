package com.example.app.backend.Models;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.example.app.backend.DTO.exercise.ExerciseDTO;

@Document(collection = "exercises")
public class Exercise {
     @Id
     private String id;

     private String userID;
     private String nameExer;
     private String typeExer;
     private String imageExer;
     private String support;
     private Integer ration;
     private Integer calo;
     private Integer time;
     private String difficulty;
     private String targetAudience;
     private String descExer;
     private List<Processing> processing;
     private List<String> likes;
     private List<String> saves;

     private Date createdAt;
     private Date updatedAt;


     // Constructors

     public Exercise() {
          this.likes = new ArrayList<>();
          this.saves = new ArrayList<>();
          this.createdAt = new Date();
          this.updatedAt = new Date();
          this.processing = new ArrayList<>();
     }

     public Exercise(ExerciseDTO exerciseDTO){
          this.setId(exerciseDTO.getId());
          this.setUserID(exerciseDTO.getUserID());
          this.setNameExer(exerciseDTO.getNameExer());
          this.setTypeExer(exerciseDTO.getTypeExer());
          this.setImageExer(exerciseDTO.getImageExer());
          this.setSupport(exerciseDTO.getSupport());
          this.setRation(exerciseDTO.getRation());
          this.setCalo(exerciseDTO.getCalo());
          this.setTime(exerciseDTO.getTime());
          this.setDifficulty(exerciseDTO.getDifficulty());
          this.setTargetAudience(exerciseDTO.getTargetAudience());
          this.setDescExer(exerciseDTO.getDescExer());
          this.setLikes(exerciseDTO.getLikes());
          this.setSaves(exerciseDTO.getSaves());

          this.setCreatedAt(exerciseDTO.getCreatedAt());
          this.setUpdatedAt(exerciseDTO.getUpdatedAt());
     }

     public Exercise(String userID, String nameExer, String typeExer, String imageExer, String support,
                         int ration, int calo, int time, String difficulty, String targetAudience,
                         String descExer, List<Processing> processing, List<String> likes, List<String> saves, Date createdAt, Date updateAt) {
          this.userID = userID;
          this.nameExer = nameExer;
          this.typeExer = typeExer;
          this.imageExer = imageExer;
          this.support = support;
          this.ration = ration;
          this.calo = calo;
          this.time = time;
          this.difficulty = difficulty;
          this.targetAudience = targetAudience;
          this.descExer = descExer;
          this.processing = processing;
          
     }

     // Getters and setters

     public String getId() {
          return id;
     }

     public void setId(String id) {
          this.id = id;
     }

     // Inner class for processing
     public static class Processing {
          private String imageProcess;
          private String descProcess;

          public Processing() {
          }

          public Processing(String imageProcess, String descProcess) {
               this.imageProcess = imageProcess;
               this.descProcess = descProcess;
          }

          public String getImageProcess() {
               return imageProcess;
          }

          public void setImageProcess(String imageProcess) {
               this.imageProcess = imageProcess;
          }

          public String getDescProcess() {
               return descProcess;
          }

          public void setDescProcess(String descProcess) {
               this.descProcess = descProcess;
          }

          // Getters and setters
     }

     public String getUserID() {
          return userID;
     }

     public void setUserID(String userID) {
          this.userID = userID;
     }

     public String getNameExer() {
          return nameExer;
     }

     public void setNameExer(String nameExer) {
          this.nameExer = nameExer;
     }

     public String getTypeExer() {
          return typeExer;
     }

     public void setTypeExer(String typeExer) {
          this.typeExer = typeExer;
     }

     public String getImageExer() {
          return imageExer;
     }

     public void setImageExer(String imageExer) {
          this.imageExer = imageExer;
     }

     public String getSupport() {
          return support;
     }

     public void setSupport(String support) {
          this.support = support;
     }

     public int getRation() {
          return ration;
     }

     public void setRation(int ration) {
          this.ration = ration;
     }

     public int getCalo() {
          return calo;
     }

     public void setCalo(int calo) {
          this.calo = calo;
     }

     public int getTime() {
          return time;
     }

     public void setTime(int time) {
          this.time = time;
     }

     public String getDifficulty() {
          return difficulty;
     }

     public void setDifficulty(String difficulty) {
          this.difficulty = difficulty;
     }

     public String getTargetAudience() {
          return targetAudience;
     }

     public void setTargetAudience(String targetAudience) {
          this.targetAudience = targetAudience;
     }

     public String getDescExer() {
          return descExer;
     }

     public void setDescExer(String descExer) {
          this.descExer = descExer;
     }

     public List<Processing> getProcessing() {
          return processing;
     }

     public void setProcessing(List<Processing> processing) {
          this.processing = processing;
     }

     public List<String> getLikes() {
          return likes;
     }

     public void setLikes(List<String> likes) {
          this.likes = likes;
     }

     public List<String> getSaves() {
          return saves;
     }

     public void setSaves(List<String> saves) {
          this.saves = saves;
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

     @Override
     public String toString() {
          return "Exercise{" +
                    "id='" + id + '\'' +
                    ", userID='" + userID + '\'' +
                    ", nameExer='" + nameExer + '\'' +
                    ", typeExer='" + typeExer + '\'' +
                    ", imageExer='" + imageExer + '\'' +
                    ", support='" + support + '\'' +
                    ", ration=" + ration +
                    ", calo=" + calo +
                    ", time=" + time +
                    ", difficulty='" + difficulty + '\'' +
                    ", targetAudience='" + targetAudience + '\'' +
                    ", descExer='" + descExer + '\'' +
                    ", processing=" + processing +
                    ", likes=" + likes +
                    ", saves=" + saves +
          '}';
     }

}
