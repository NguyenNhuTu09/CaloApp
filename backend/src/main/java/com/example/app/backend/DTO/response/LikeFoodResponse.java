package com.example.app.backend.DTO.response;
import java.util.List;

public class LikeFoodResponse {
     private Integer count;
     private List<String> likes;
     public LikeFoodResponse(){
          
     }
     public LikeFoodResponse(Integer count, List<String> likes) {
          this.count = count;
          this.likes = likes;
     }
     public Integer getCount() {
          return count;
     }
     public void setCount(Integer count) {
          this.count = count;
     }
     public List<String> getLikes() {
          return likes;
     }
     public void setLikes(List<String> likes) {
          this.likes = likes;
     }
     
     
}
