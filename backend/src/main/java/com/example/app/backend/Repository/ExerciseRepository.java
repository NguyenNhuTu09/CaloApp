package com.example.app.backend.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.app.backend.DTO.exercise.ExerciseDTO;
import com.example.app.backend.Models.Exercise;

@Repository
public interface ExerciseRepository extends MongoRepository<Exercise, String> {
     void save(ExerciseDTO exerciseDTO);

}
