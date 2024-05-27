package com.example.app.backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.app.backend.DTO.response.DataResponse;
import com.example.app.backend.Service.DayPlanService;

@RestController
@RequestMapping("/dayplans")
public class DayPlanController {
     
     @Autowired
     private DayPlanService dayPlanService;

     @GetMapping("/")
     public ResponseEntity<DataResponse> getAllDayPlan(){
          return new ResponseEntity<>(new DataResponse("successfully",dayPlanService.listPlans().size(), dayPlanService.listPlans()), HttpStatus.OK);
     }

     @DeleteMapping("/{dayPlanId}")
     public ResponseEntity<DataResponse> deleteDayPlan(@PathVariable("dayPlanId") String dayPlanId){
          dayPlanService.deleteDayPlan(dayPlanId);
          return new ResponseEntity<>(new DataResponse(true, "Xóa ngày trong kế hoạch thành công"), HttpStatus.OK);
     }

     @GetMapping("/{dayPlanId}")
     public ResponseEntity<DataResponse> getSingleDayPlan(@PathVariable("dayPlanId") String dayPlanId){
          return new ResponseEntity<>(new DataResponse("Successfully", dayPlanService.getSingleDayPlan(dayPlanId)), HttpStatus.OK);
     }

     

}
