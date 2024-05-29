package com.example.app.backend.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.app.backend.Models.DayPlan;
import com.example.app.backend.Models.Plan;
import com.example.app.backend.Repository.DayPlanRepository;
import com.example.app.backend.Repository.PlanRepository;
import com.example.app.backend.exceptions.DataNotExistException;

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
          DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
          LocalDate dateStart = LocalDate.parse(savedPlan.getDayStart(), formatter);
          LocalDate dateEnd = LocalDate.parse(savedPlan.getDayEnd(), formatter);
          int stt = 1;
          for(LocalDate date = dateStart; !date.isAfter(dateEnd); date = date.plusDays(1)){
               DayPlan dayPlan = new DayPlan(
                    savedPlan.getId(),
                    "Ngày thứ " + stt,
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

     public void deletePlan(String planId) throws DataNotExistException{
          Optional<Plan> planSearch = planRepository.findById(planId);
          if(!planSearch.isPresent()){
               throw new DataNotExistException("Kế hoạch không tồn tại");
          }
          List<DayPlan> listDayPlan = dayPlanRepository.findAll();
          for(DayPlan dayPlan: listDayPlan){
               if(planSearch.get().getId().toString().equals(dayPlan.getPlanID())){
                    dayPlanRepository.delete(dayPlan);
               }
          }
          planRepository.deleteById(planId);
     }

     public Plan getSinglePlan(String planId) throws DataNotExistException{
          Plan planSearch = planRepository.findPlanById(planId);
          if(planSearch == null){
               throw new DataNotExistException("Kế hoạch không tồn tại");
          }
          return planSearch;
          
     }

}
