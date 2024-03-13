package com.example.app.backend.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "dayfoods")
public class DayFood {

     @Id
     private String id;

     

     
}
