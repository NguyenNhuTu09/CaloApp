import Plan from "../models/Plan.js";
import User from "../models/User.js";
import DayPlan from "../models/DayPlan.js";
import DayFood from "../models/DayFood.js";
import DayExercise from "../models/DayExercise.js";

export const createPlan = async(req, res) => {
     const newPlan = new Plan(req.body)      
        
     const id = req.params.id 

     try{
          const savedPlan = await newPlan.save() 

          const planId = savedPlan._id 

          const updateDayPlan = await Plan.findById(planId)
          const start = new Date(updateDayPlan.startPlan)
          const end = new Date(updateDayPlan.endPlan)
          let stt = 1;
          for (let date = start; date <= end; date.setDate(date.getDate()+1)) {
               const dayPlan = await DayPlan.create({
                    nameDayPlan: "Ngày thứ " + stt,
               });
               updateDayPlan.dayPlan.push(dayPlan);
               stt++;
          }
          await updateDayPlan.save()

          const updatePlansUser = await User.findById(id)                  
          console.log(updatePlansUser)
          if(!updatePlansUser){
               return res.status(404).json({ message: 'Đăng nhập trước khi tạo kế hoạch' });
          }
          updatePlansUser.plans.push(planId)
          await updatePlansUser.save()

          res.status(200).json({
               success: true, 
               message: 'Tạo kế hoạch thành công',
               data: savedPlan})
     }catch(err){
          console.log(err)
          res.status(500).json({
               success: false, 
               message: 'Server có lỗi'})
     }
}



export const getSinglePlan = async (req, res) => {
     const id = req.params.id
     try{
          const plan = await Plan.findById(id)

          res.status(200).json({
               success: true, 
               message: 'Successfully',
               data: plan})
     }catch(err){
          res.status(404).json({
               success: false, 
               message: 'not found'})
     }
}

export const deletedPlan = async (req, res) => {
     const id = req.params.id
     try{
          await Plan.findByIdAndDelete(id)

          res.status(200).json({
               success: true, 
               message: 'Successfully deleted'})
     }catch(err){
          res.status(500).json({
               success: false, 
               message: 'Failed to delete'})
     }
}


// get All dayFood
export const getAllPlan = async (req, res) => {
     //for pagination
     const page = parseInt(req.query.page)

     try{
          const plans = await Plan.find({})
          
          res.status(200).json({
               success: true, 
               count: plans.length,
               message: 'Successfully ',
               data: plans})
     }catch(err){
          res.status(404).json({
               success: false, 
               message: 'not found'})
     } 
}


export const updatePlan = async (req, res) => {
     const id = req.params.id
     try{
          const updatePlan = await Plan.findByIdAndUpdate(id, {
               $set: req.body
          }, {new:true})

          res.status(200).json({
               success: true, 
               message: 'Successfully updatesd',
               data: updatePlan})
     }catch(err){
          res.status(500).json({
               success: false, 
               message: 'Failed to update'})
     }
}