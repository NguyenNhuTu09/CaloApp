package com.example.app.backend.DTO.food;

import jakarta.annotation.Nonnull;
import com.example.app.backend.Models.Food;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class FoodDTO {

     private String id;
     private @Nonnull String userID;
     private @Nonnull String nameFood;
     private @Nonnull String typeFood;
     private @Nonnull String support;
     private @Nonnull Integer ration;
     private @Nonnull Integer calo;
     private @Nonnull String imageFood;
     private @Nonnull String mainMaterial;
     private @Nonnull String auxiliaryMaterials;
     private @Nonnull String additives;
     private @Nonnull String cookingMethod;
     private @Nonnull String descFood;
     private @Nonnull String country;
     // private @Nonnull List<PreparationMethod> preparationMethods;
     private @Nonnull List<String> likes;
     private @Nonnull List<String> saves;

     private @Nonnull Date createdAt;
     private @Nonnull Date updatedAt;

     public FoodDTO(){
          this.likes = new ArrayList<>();
          this.saves = new ArrayList<>();
          this.createdAt = new Date();
          this.updatedAt = new Date();
     }

     public FoodDTO(Food food){
          this.setId(food.getId());
          this.setUserID(food.getUserID());
          this.setNameFood(food.getNameFood());
          this.setTypeFood(food.getTypeFood());
          this.setSupport(food.getSupport());
          this.setRation(food.getRation());
          this.setCalo(food.getCalo());
          this.setImageFood(food.getImageFood());
          this.setMainMaterial(food.getMainMaterial());
          this.setAuxiliaryMaterials(food.getAuxiliaryMaterials());
          this.setAdditives(food.getAdditives());
          this.setCookingMethod(food.getCookingMethod());
          this.setDescFood(food.getDescFood());
          this.setCountry(food.getCountry());
          this.setLikes(food.getLikes());
          this.setSaves(food.getSaves());
          this.setCreatedAt(food.getCreatedAt());
          this.setUpdatedAt(food.getUpdatedAt());
     }
     public FoodDTO(@Nonnull String userID, @Nonnull String nameFood, @Nonnull String typeFood, @Nonnull String support, @Nonnull Integer ration, @Nonnull Integer calo,
     @Nonnull String imageFood, @Nonnull String mainMaterial, @Nonnull String auxiliaryMaterials, @Nonnull String additives, @Nonnull String cookingMethod,
     @Nonnull String descFood, @Nonnull String country, Date createdAt, Date updatedAt) { 
          this.userID = userID;
          this.nameFood = nameFood;
          this.typeFood = typeFood;
          this.support = support;
          this.ration = ration;
          this.calo = calo;
          this.imageFood = imageFood;
          this.mainMaterial = mainMaterial;
          this.auxiliaryMaterials = auxiliaryMaterials;
          this.additives = additives;
          this.cookingMethod = cookingMethod;
          this.descFood = descFood;
          this.country = country;
          // this.likes = likes;
          // this.saves = saves;
     }

     // public static class PreparationMethod {
     //      private String imageCook;
     //      private String descCook;

     //      public PreparationMethod() {
     //      }
  
     //      public PreparationMethod(String imageCook, String descCook) {
     //          this.imageCook = imageCook;
     //          this.descCook = descCook;
     //      }
     // }

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
     public String getNameFood() {
          return nameFood;
     }
     public void setNameFood(String nameFood) {
          this.nameFood = nameFood;
     }
     public String getTypeFood() {
          return typeFood;
     }
     public void setTypeFood(String typeFood) {
          this.typeFood = typeFood;
     }
     public String getSupport() {
          return support;
     }
     public void setSupport(String support) {
          this.support = support;
     }
     public Integer getRation() {
          return ration;
     }
     public void setRation(Integer ration) {
          this.ration = ration;
     }
     public Integer getCalo() {
          return calo;
     }
     public void setCalo(Integer calo) {
          this.calo = calo;
     }
     public String getImageFood() {
          return imageFood;
     }
     public void setImageFood(String imageFood) {
          this.imageFood = imageFood;
     }
     public String getMainMaterial() {
          return mainMaterial;
     }
     public void setMainMaterial(String mainMaterial) {
          this.mainMaterial = mainMaterial;
     }
     public String getAuxiliaryMaterials() {
          return auxiliaryMaterials;
     }
     public void setAuxiliaryMaterials(String auxiliaryMaterials) {
          this.auxiliaryMaterials = auxiliaryMaterials;
     }
     public String getAdditives() {
          return additives;
     }
     public void setAdditives(String additives) {
          this.additives = additives;
     }
     public String getCookingMethod() {
          return cookingMethod;
     }
     public void setCookingMethod(String cookingMethod) {
          this.cookingMethod = cookingMethod;
     }
     public String getDescFood() {
          return descFood;
     }
     public void setDescFood(String descFood) {
          this.descFood = descFood;
     }
     public String getCountry() {
          return country;
     }
     public void setCountry(String country) {
          this.country = country;
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

     
}