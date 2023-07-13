import Plan from "../models/Plan.js";


export const createPlan = async(req, res) => {
     const newPlan = new Plan(req.body)
     try{
          const savedPlan = await newPlan.save()
          res.status(200).json({
               success: true, 
               message: 'Tạo bữa ăn thành công',
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

// delete food
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