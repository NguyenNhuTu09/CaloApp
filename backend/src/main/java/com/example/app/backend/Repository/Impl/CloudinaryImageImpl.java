package com.example.app.backend.Repository.Impl;

import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

public interface CloudinaryImageImpl {
     public Map upload(MultipartFile file);
}
