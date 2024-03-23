package com.example.app.backend.Models;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import com.example.app.backend.DTO.food.FoodDTO;

@Document(collection = "foods")
public class Food {
     @Id
     private String id;

     @Field("userID")
     
     private String userID;
     private String nameFood;
     private String typeFood;
     private String imageFood;
     private String support;
     private Integer ration;
     private Integer calo;
     private String mainMaterial;
     private String auxiliaryMaterials;
     private String additives;
     private String cookingMethod;
     private String descFood;
     private String country;
     private List<PreparationMethod> preparationMethods;
     private List<String> likes;
     private List<String> saves;

     private Date createdAt;
     private Date updatedAt;
     

     public static class PreparationMethod {
          private String imageCook;
          private String descCook;

          public PreparationMethod() {
          }
  
          public PreparationMethod(String imageCook, String descCook) {
              this.imageCook = imageCook;
              this.descCook = descCook;
          }

          public String getImageCook() {
               return imageCook;
          }

          public void setImageCook(String imageCook) {
               this.imageCook = imageCook;
          }

          public String getDescCook() {
               return descCook;
          }

          public void setDescCook(String descCook) {
               this.descCook = descCook;
          }
     }

     public Food(){
          this.likes = new ArrayList<>();
          this.saves = new ArrayList<>();
          this.createdAt = new Date();
          this.updatedAt = new Date();
     }

     public Food(FoodDTO foodDTO){
          this.id = foodDTO.getId();
          this.userID = foodDTO.getUserID();
          this.nameFood = foodDTO.getNameFood();
          this.typeFood = foodDTO.getTypeFood();
          this.imageFood = foodDTO.getImageFood();
          this.support = foodDTO.getSupport();
          this.ration = foodDTO.getRation();
          this.calo = foodDTO.getCalo();
          this.mainMaterial = foodDTO.getMainMaterial();
          this.auxiliaryMaterials = foodDTO.getAuxiliaryMaterials();
          this.additives = foodDTO.getAdditives();
          this.cookingMethod = foodDTO.getCookingMethod();
          this.descFood = foodDTO.getDescFood();
          this.country = foodDTO.getCountry();
          // this.preparationMethods = foodDTO.;

          this.likes = foodDTO.getLikes();
          this.saves = foodDTO.getSaves();
          this.createdAt = foodDTO.getCreatedAt();
          this.updatedAt = foodDTO.getUpdatedAt();
          
     }

     public Food(String id, String userID, String nameFood, String typeFood, String imageFood, String support,
                int ration, int calo, String mainMaterial, String auxiliaryMaterials, String additives,
                String cookingMethod, String descFood, String country, List<PreparationMethod> preparationMethods,
                List<String> likes, List<String> saves, Date createdAt, Date updatedAt) {
          this.id = id;
          this.userID = userID;
          this.nameFood = nameFood;
          this.typeFood = typeFood;
          this.imageFood = imageFood;
          this.support = support;
          this.ration = ration;
          this.calo = calo;
          this.mainMaterial = mainMaterial;
          this.auxiliaryMaterials = auxiliaryMaterials;
          this.additives = additives;
          this.cookingMethod = cookingMethod;
          this.descFood = descFood;
          this.country = country;
     }

    // Getters and setters

     public String getId() {
          return id;
     }

     public void setId(String id) {
          this.id = id;
     }

     public String getNameFood() {
          return nameFood;
     }

     public void SetNameFood(String nameFood) {
          this.nameFood = nameFood;
     }

     public String getUserID() {
          return userID;
     }

     public void setUserID(String userID) {
          this.userID = userID;
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

     public String getImageFood() {
          return imageFood;
     }

     public void setImageFood(String imageFood) {
          this.imageFood = imageFood;
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

     public List<PreparationMethod> getPreparationMethods() {
          return preparationMethods;
     }

     public void setPreparationMethods(List<PreparationMethod> preparationMethods) {
          this.preparationMethods = preparationMethods;
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

     public void setUpdateAt(Date updatedAt) {
          this.updatedAt = updatedAt;
     }


     @Override
     public String toString() {
          return "Food{" +
                    "id='" + id + '\'' +
                    ", userID='" + userID + '\'' +
                    ", nameFood='" + nameFood + '\'' +
                    ", typeFood='" + typeFood + '\'' +
                    ", imageFood='" + imageFood + '\'' +
                    ", support='" + support + '\'' +
                    ", ration=" + ration +
                    ", calo=" + calo +
                    ", mainMaterial='" + mainMaterial + '\'' +
                    ", auxiliaryMaterials='" + auxiliaryMaterials + '\'' +
                    ", additives='" + additives + '\'' +
                    ", cookingMethod='" + cookingMethod + '\'' +
                    ", descFood='" + descFood + '\'' +
                    ", country='" + country + '\'' +
                    ", preparationMethods=" + preparationMethods +
                    ", likes=" + likes +
                    ", saves=" + saves +
                    ", createdAt=" + createdAt +
                    ", updatedAt=" + updatedAt +
               '}';
     }



}
