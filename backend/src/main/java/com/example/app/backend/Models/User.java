package com.example.app.backend.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import com.example.app.backend.enums.Role;

import java.util.Date;


@Document(collection = "users")
public class User {
     
     @Id
     private String id;

     private String lastFirstName;
     private String email;
     private String password;
     private String userName;
     private String date;
     private String phone;
     private String gender;
     private String address;
     private String avatar;
     private Role role;

     private Date createdAt;
     private Date updatedAt;


     public User(){
          
     }


     public User(String lastFirstName, String email, String password, String userName, String date,
               String phone, String gender, String address, String avatar, Role role) {
          this.lastFirstName = lastFirstName;
          this.email = email;
          this.password = password;
          this.userName = userName;
          this.date = date;
          this.phone = phone;
          this.gender = gender;
          this.address = address;
          this.avatar = avatar;
          this.role = role;
     }

     
     public String getId() {
          return id;
     }
     public void setId(String id) {
          this.id = id;
     }
     public String getLastFirstName() {
          return lastFirstName;
     }
     public void setLastFirstName(String lastFirstName) {
          this.lastFirstName = lastFirstName;
     }
     public String getEmail() {
          return email;
     }
     public void setEmail(String email) {
          this.email = email;
     }
     public String getPassword() {
          return password;
     }
     public void setPassword(String password) {
          this.password = password;
     }
     public String getUserName() {
          return userName;
     }
     public void setUserName(String userName) {
          this.userName = userName;
     }
     public String getDate() {
          return date;
     }
     public void setDate(String date) {
          this.date = date;
     }
     public String getPhone() {
          return phone;
     }
     public void setPhone(String phone) {
          this.phone = phone;
     }
     public String getGender() {
          return gender;
     }
     public void setGender(String gender) {
          this.gender = gender;
     }
     public String getAddress() {
          return address;
     }
     public void setAddress(String address) {
          this.address = address;
     }
     public String getAvatar() {
          return avatar;
     }
     public void setAvatar(String avatar) {
          this.avatar = avatar;
     }
     public Role getRole() {
          return role;
     }
     public void setRole(Role role) {
          this.role = role;
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
          return "User [id=" + id + ", lastFirstName=" + lastFirstName + ", email=" + email + ", password=" + password
                    + ", userName=" + userName + ", date=" + date + ", phone=" + phone + ", gender=" + gender
                    + ", address=" + address + ", avatar=" + avatar + ", role=" + role + ", createdAt=" + createdAt
                    + ", updatedAt=" + updatedAt + "]";
     }


     
     
}
