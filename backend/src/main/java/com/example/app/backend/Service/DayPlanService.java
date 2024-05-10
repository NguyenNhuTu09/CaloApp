package com.example.app.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.app.backend.Repository.DayPlanRepository;
import com.example.app.backend.exceptions.DataNotExistException;

import java.util.List;

import com.example.app.backend.Models.DayPlan;
@Service
@Transactional
public class DayPlanService {

     @Autowired 
     private DayPlanRepository dayPlanRepository;

     public List<DayPlan> listPlans(){
          List<DayPlan> listDayPlan = dayPlanRepository.findAll();
          return listDayPlan;
     }

     public void deleteDayPlan(String theId){
          dayPlanRepository.deleteById(theId);
     }

     public DayPlan getSingleDayPlan(String theId) throws DataNotExistException{
          DayPlan dayPlanSearch = dayPlanRepository.findDayPlanById(theId);
          if(dayPlanSearch == null){
               throw new DataNotExistException("Ngày kế hoạch không tồn tại");
          }
          return dayPlanSearch;
     }

     

}
