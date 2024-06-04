package com.example.app.backend.DTO.exercise;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.example.app.backend.Models.Exercise;
import com.example.app.backend.Models.Exercise.Processing;

import jakarta.annotation.Nonnull;



public final class ExerciseDTO {
     private String id;

     private @Nonnull String userID;
     private @Nonnull String nameExer;
     private @Nonnull String typeExer;
     private @Nonnull String imageExer;
     private @Nonnull String support;
     private @Nonnull Integer ration;
     private @Nonnull Integer calo;
     private @Nonnull Integer time;
     private @Nonnull String difficulty;
     private @Nonnull String targetAudience;
     private @Nonnull String descExer;
     private @Nonnull List<Processing> processing;
     private @Nonnull List<String> likes;
     private @Nonnull List<String> saves;

     private @Nonnull Date createdAt;
     private @Nonnull Date updatedAt;
     
     public ExerciseDTO() {
          this.likes = new ArrayList<>();
          this.saves = new ArrayList<>();
          this.createdAt = new Date();
          this.updatedAt = new Date();
          
     }
     public ExerciseDTO(Exercise exercise){
          this.setId(exercise.getId());
          this.setUserID(exercise.getUserID());
          this.setNameExer(exercise.getNameExer());
          this.setTypeExer(exercise.getTypeExer());
          this.setImageExer(exercise.getImageExer());
          this.setSupport(exercise.getSupport());
          this.setRation(exercise.getRation());
          this.setCalo(exercise.getCalo());
          this.setTime(exercise.getTime());
          this.setDifficulty(exercise.getDifficulty());
          this.setTargetAudience(exercise.getTargetAudience());
          this.setDescExer(exercise.getDescExer());
          this.setLikes(exercise.getLikes());
          this.setSaves(exercise.getSaves());

          this.setCreatedAt(exercise.getCreatedAt());
          this.setUpdatedAt(exercise.getUpdatedAt());
     }

     public ExerciseDTO(@Nonnull String userID, @Nonnull String nameExer, @Nonnull String typeExer, @Nonnull String imageExer, @Nonnull String support,
     @Nonnull int ration, @Nonnull int calo, @Nonnull int time, @Nonnull String difficulty, @Nonnull String targetAudience,
     @Nonnull String descExer, @Nonnull List<Processing> processing, @Nonnull List<String> likes, @Nonnull List<String> saves, Date createdAt, Date updatedAt) {
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

     public String getId() {
          return id;
     }

     public void setId(String id) {
          this.id = id;
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

     public List<Processing> getProcessing() {
          return processing;
     }
     public void setProcessing(List<Processing> processing) {
          this.processing = processing;
     }

     // Món ăn mà con thích nhất là gì

}
