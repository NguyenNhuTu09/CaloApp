package com.example.app.backend.Config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer{

     @Override
     public void addCorsMappings(CorsRegistry registry){
          registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173") // Cấu hình cho phép truy cập từ domain của ứng dụng ReactJS
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowCredentials(true);
     }

     
}
