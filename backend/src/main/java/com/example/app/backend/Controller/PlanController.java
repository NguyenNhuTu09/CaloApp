package com.example.app.backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.app.backend.Service.PlanService;
import com.example.app.backend.DTO.response.PlansResponse;
import com.example.app.backend.DTO.response.PlanResponse;

import com.example.app.backend.Models.Plan;

@RestController
@RequestMapping("/plans")
public class PlanController {
     
     @Autowired
     private PlanService planService;

     @GetMapping("/")
     public ResponseEntity<PlansResponse> getAllPlan(){
          return new ResponseEntity<PlansResponse>(new PlansResponse(true, "Successfully", planService.listPlan()), HttpStatus.OK);
     }

     @PostMapping("/")
     public ResponseEntity<PlanResponse> addPlans(@RequestBody Plan plan){
          return new ResponseEntity<PlanResponse>(new PlanResponse(true, "Successfully", planService.addPlan(plan)), HttpStatus.OK);
     }
}
