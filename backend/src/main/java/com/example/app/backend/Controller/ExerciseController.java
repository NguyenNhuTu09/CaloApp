package com.example.app.backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.app.backend.DTO.exercise.ExerciseDTO;
import com.example.app.backend.DTO.response.DataResponse;
import com.example.app.backend.Service.ExerciseService;


@RestController
@RequestMapping("/exercise")
public class ExerciseController {
     
     @Autowired
     private ExerciseService exerciseService;

     // Get all Exercise
     @GetMapping("/")
     public ResponseEntity<DataResponse> getAllExercise(){
          return new ResponseEntity<>(new DataResponse("Danh sách bài tập", 
                                                                 exerciseService.listExercises().size(), 
                                                                 exerciseService.listExercises()), HttpStatus.OK);
     }

     // Get single Exercise
     @GetMapping("/{exerciseId}")
     public ResponseEntity<DataResponse> getSingleExercise(@PathVariable("exerciseId") String exerciseId){
          return new ResponseEntity<>(new DataResponse("Successfully", 
                                                                 exerciseService.getSingleExer(exerciseId)), 
                                                                      HttpStatus.OK);
     }

     // Post created new Exercise
     @PostMapping("/")
     public ResponseEntity<DataResponse> addExercise(@RequestBody ExerciseDTO exerciseDTO){
          return new ResponseEntity<>(new DataResponse("Tạo bài tập thành công", 
                                                                 exerciseService.addExer(exerciseDTO)), HttpStatus.CREATED);
     }

     // Delete Exercise by Id
     @DeleteMapping("/{exerciseId}")
     public ResponseEntity<DataResponse> deleteExercise(@PathVariable("exerciseId") String exerciseId){
          exerciseService.deleteExer(exerciseId);
          return new ResponseEntity<>(new DataResponse(true, 
                                                                 "Xóa bài tập thành công"), HttpStatus.OK);
     }
}
