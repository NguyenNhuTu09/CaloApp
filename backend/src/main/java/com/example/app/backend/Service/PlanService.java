package com.example.app.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.example.app.backend.Repository.PlanRepository;
import com.example.app.backend.Repository.DayPlanRepository;

import com.example.app.backend.Models.Plan;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

import com.example.app.backend.Models.DayPlan;

@Service
@Transactional
public class PlanService {
     
     @Autowired
     public PlanRepository planRepository;

     @Autowired 
     public DayPlanRepository dayPlanRepository;

     public List<Plan> listPlan(){
          List<Plan> listPlan = planRepository.findAll();
          return listPlan;
     }

     public Plan addPlan(Plan plan){
          plan.setPlanState("Dang xu ly");
          planRepository.save(plan);
          Plan savedPlan = planRepository.save(plan);
          // System.out.println(savedPlan.getId());

          DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
          LocalDate dateStart = LocalDate.parse(savedPlan.getDayStart(), formatter);
          LocalDate dateEnd = LocalDate.parse(savedPlan.getDayEnd(), formatter);
          int stt = 1;
          for(LocalDate date = dateStart; !date.isAfter(dateEnd); date = date.plusDays(1)){
               DayPlan dayPlan = new DayPlan(
                    savedPlan.getId(),
                    "Ngày thứ" + stt,
                    "",
                    0,
                    0,
                    ""
               );
               dayPlanRepository.save(dayPlan);
               stt++;
          }

          return plan;
     }

}
