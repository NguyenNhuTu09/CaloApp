package com.example.app.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

import com.cloudinary.Cloudinary;
import com.example.app.backend.Repository.Impl.CloudinaryImageImpl;

@Service
public class FileUploadService implements CloudinaryImageImpl {
     
     @Autowired 
     private Cloudinary cloudinary;

     @SuppressWarnings("rawtypes")
     @Override
     public Map upload(MultipartFile file){

          try{
               Map data = this.cloudinary.uploader().upload(file.getBytes(), Map.of());
               return data;
          }catch(IOException e){
               throw new RuntimeException("Tải ảnh lên Cloudinary thất bại");
          }
     }
    
}
