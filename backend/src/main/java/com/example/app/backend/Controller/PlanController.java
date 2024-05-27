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

import com.example.app.backend.DTO.response.DataResponse;
import com.example.app.backend.Models.Plan;
import com.example.app.backend.Service.PlanService;

@RestController
@RequestMapping("/plans")
public class PlanController {
     
     @Autowired
     private PlanService planService;

     @GetMapping("/")
     public ResponseEntity<DataResponse> getAllPlan(){
          return new ResponseEntity<>(new DataResponse("Successfully",planService.listPlan().size(), planService.listPlan()), HttpStatus.OK);
     }

     @PostMapping("/")
     public ResponseEntity<DataResponse> addPlans(@RequestBody Plan plan){
          return new ResponseEntity<>(new DataResponse("Successfully", planService.addPlan(plan)), HttpStatus.OK);
     }

     @DeleteMapping("/{planId}")
     public ResponseEntity<DataResponse> deletePlan(@PathVariable("planId") String planId){
          planService.deletePlan(planId);
          return new ResponseEntity<>(new DataResponse(true, "Xóa kế hoạch thành công"), HttpStatus.OK);
     }

     @GetMapping("/{planId}")
     public ResponseEntity<DataResponse> getSinglePlan(@PathVariable("planId") String planId) {
         return new ResponseEntity<>(new DataResponse("Successfully", planService.getSinglePlan(planId)), HttpStatus.OK);
     }
     

}
