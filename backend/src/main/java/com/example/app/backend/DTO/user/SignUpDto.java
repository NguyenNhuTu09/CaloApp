package com.example.app.backend.DTO.user;

public class SignUpDto {
     private String lastFirstName;
     private String email;
     private String password;
     private String userName;
     private String date;
     private String phone;
     private String gender;
     private String address;
     private String avatar;
    
     public SignUpDto(){

     }
     public SignUpDto(String lastFirstName, String email, String password, String userName, String date, String phone, String gender,
               String address, String avatar) {
          this.lastFirstName = lastFirstName;
          this.email = email;
          this.password = password;
          this.userName = userName;
          this.date = date;
          this.phone = phone;
          this.gender = gender;
          this.address = address;
          this.avatar = avatar;
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
}
