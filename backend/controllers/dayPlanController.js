import DayPlan from "../models/DayPlan.js";


export const createDayPlan = async(req, res) => {
     const newDayPlan = new DayPlan(req.body)
     try{
          const savedDayPlan = await newDayPlan.save()
          res.status(200).json({
               success: true, 
               message: 'Tạo ngày trong kế hoạch thành công',
               data: savedDayPlan})
     }catch(err){
          console.log(err)
          res.status(500).json({
               success: false, 
               message: 'Server có lỗi'})
     }
}

export const getSingleDayPlan = async (req, res) => {
     const id = req.params.id
     try{
          const dayPlan = await DayPlan.findById(id)

          res.status(200).json({
               success: true, 
               message: 'Successfully',
               data: dayPlan})
     }catch(err){
          res.status(404).json({
               success: false, 
               message: 'not found'})
     }
}

export const deletedDayPlan = async (req, res) => {
     const id = req.params.id
     try{
          await DayPlan.findByIdAndDelete(id)

          res.status(200).json({
               success: true, 
               message: 'Successfully deleted'})
     }catch(err){
          res.status(500).json({
               success: false, 
               message: 'Failed to delete'})
     }
}

export const getAllDayPlan = async (req, res) => {
     //for pagination
     const page = parseInt(req.query.page)

     try{
          const dayplans = await DayPlan.find({})
          
          res.status(200).json({
               success: true, 
               count: dayplans.length,
               message: 'Successfully ',
               data: dayplans})
     }catch(err){
          res.status(404).json({
               success: false, 
               message: 'not found'})
     } 
}