package com.example.app.backend.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.app.backend.Service.DayPlanService;
import com.example.app.backend.Common.ApiResponse;
import com.example.app.backend.DTO.response.ResponseDayPlan;

@RestController
@RequestMapping("/dayplans")
public class DayPlanController {
     
     @Autowired
     private DayPlanService dayPlanService;

     @GetMapping("/")
     public ResponseEntity<ResponseDayPlan> getAllDayPlan(){
          return new ResponseEntity<ResponseDayPlan>(new ResponseDayPlan(true, "successfully", dayPlanService.listPlans()), HttpStatus.OK);
     }

     @DeleteMapping("/{dayPlanId}")
     public ResponseEntity<ApiResponse> deleteDayPlan(@PathVariable("dayPlanId") String dayPlanId){
          dayPlanService.deleteDayPlan(dayPlanId);
          return new ResponseEntity<ApiResponse>(new ApiResponse(true, "Xóa ngày trong kế hoạch thành công"), HttpStatus.OK);
     }

}
