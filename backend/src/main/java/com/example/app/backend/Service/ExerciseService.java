package com.example.app.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.app.backend.Repository.ExerciseRepository;


import com.example.app.backend.Models.Exercise;
import java.util.Optional;
import java.util.List;
import java.util.ArrayList;
import com.example.app.backend.DTO.exercise.ExerciseDTO;

@Service
@Transactional
public class ExerciseService {
     
     @Autowired
     private ExerciseRepository exerciseRepository;

     public ExerciseService(){
     }

     public ExerciseService(ExerciseRepository thExerciseRepository){
          exerciseRepository = thExerciseRepository;
     }

     public static Exercise getExerDTOFromExer(ExerciseDTO exerciseDTO){
          Exercise exercise = new Exercise(exerciseDTO);
          return exercise;
     }

     public static ExerciseDTO getExerFromExerDTO(Exercise exercise){
          ExerciseDTO exerciseDTO = new ExerciseDTO(exercise);
          return exerciseDTO;
     }

     public List<ExerciseDTO> listExercises(){
          List<Exercise> exercises = exerciseRepository.findAll();
          List<ExerciseDTO> exerciseDTOs = new ArrayList<>();

          for(Exercise exercise: exercises){
               ExerciseDTO exerciseDTO = getExerFromExerDTO(exercise);
               exerciseDTOs.add(exerciseDTO);
          }
          return exerciseDTOs;
     }

     public Exercise addExer(ExerciseDTO exerciseDTO){
          Exercise exercise = getExerDTOFromExer(exerciseDTO);
          exerciseRepository.save(exercise);
          return exercise;
     }

     public Exercise getSingleExer(String theId){
          Optional<Exercise> optionalExercise = exerciseRepository.findById(theId);

          return optionalExercise.get();
     }
}
