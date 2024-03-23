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
     
     @Override
     public Map<String, Object> upload(MultipartFile file){

          try{
               Map<String, Object> data = this.cloudinary.uploader().upload(file.getBytes(), Map.of());
               return data;
          }catch(IOException e){
               throw new RuntimeException("Tải ảnh lên Cloudinary thất bại");
          }
     }
     // ngay cả khi bạn nỗ lực nhất, sẽ vẫn luôn có những người nỗ lực hơn cả thế, sự nỗ lực không bao giờ là đủ là nhiều
     // thế nên, đừng bao giờ ngừng cố gắng trong bất cứ chuyện gì
     // tôi không nói bạn nỗ lực rồi sẽ thành công, nhưng muốnt thành công, bạn buộc phải nỗ lực 
}
