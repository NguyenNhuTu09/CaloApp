package com.example.app.backend.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.HttpStatus;
import com.example.app.backend.Service.FileUploadService;

import java.util.HashMap;
import java.util.Map;

import javax.swing.text.StyledEditorKit.BoldAction;

@RestController
@RequestMapping("/upload")
public class FileController {
     
     @Autowired
     public FileUploadService fileUploadService;

     @PostMapping("/image")
     public ResponseEntity<Map> uploadImage (@RequestParam("image") MultipartFile file){
          Map data = this.fileUploadService.upload(file);
          System.out.println(data);
          return new ResponseEntity<>(data, HttpStatus.OK);
     }

}
