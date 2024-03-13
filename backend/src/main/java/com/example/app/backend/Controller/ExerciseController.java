package com.example.app.backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.app.backend.Service.ExerciseService;
import com.example.app.backend.Models.Exercise;
import com.example.app.backend.DTO.exercise.ExerciseDTO;
import com.example.app.backend.DTO.response.ExerResponse;
import com.example.app.backend.DTO.response.ExersResponse;
import java.util.List;


@RestController
@RequestMapping("/exercise")
public class ExerciseController {
     
     private ExerciseService exerciseService;
     private ExersResponse exersResponse;
     private ExerResponse exerResponse;

     @Autowired
     public ExerciseController(ExerciseService thExerciseService, ExersResponse thExersResponse, ExerResponse thExerResponse){
          exerciseService = thExerciseService;
          exersResponse = thExersResponse;
          exerResponse = thExerResponse;
     }

     @GetMapping("/")
     public ResponseEntity<ExersResponse> getAllExercise(){
          List<ExerciseDTO> body = exerciseService.listExercises();
          if(body != null){
               exersResponse.setSuccess(true);
          }else{
               exersResponse.setSuccess(true);
          }
          Integer i = 0;
          for(ExerciseDTO exerciseDTO: body){
               i++;
          }
          exersResponse.setCount(i);
          exersResponse.setMessage("Danh sách bài tập");
          exersResponse.setData(body);

          return new ResponseEntity<ExersResponse>(exersResponse, HttpStatus.OK);
     }

     @GetMapping("/{exerciseId}")
     public ResponseEntity<ExerResponse> getSingleExercise(@PathVariable("exerciseId") String exerciseId){
          // exerciseService.getSingleExer(exerciseId);
          exerResponse.setSuccess(true);
          exerResponse.setMessage("Sucessfully");
          exerResponse.setData(exerciseService.getSingleExer(exerciseId));
          return new ResponseEntity<ExerResponse>(exerResponse, HttpStatus.OK);
     }


     @PostMapping("/")
     public ResponseEntity<ExerResponse> addExercise(@RequestBody ExerciseDTO exerciseDTO){
          // exerciseService.addExer(exerciseDTO);
          return new ResponseEntity<ExerResponse>(new ExerResponse(true, "Tạo bài tập thành công", exerciseService.addExer(exerciseDTO)), HttpStatus.CREATED);
     }


}
