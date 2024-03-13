package com.example.app.backend.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

import com.example.app.backend.DTO.exercise.ExerciseDTO;
import com.example.app.backend.Models.Exercise;
import java.util.List;

@Repository
public interface ExerciseRepository extends MongoRepository<Exercise, String> {
     List<Exercise> findAll();

     void save(ExerciseDTO exerciseDTO);

     Exercise save(Exercise exercise);

     Optional<Exercise> findById(String theId);
}
