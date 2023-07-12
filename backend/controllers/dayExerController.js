import DayExercise from "../models/DayExercise.js";


export const createDayExercise = async(req, res) => {
     const newDayExercise = new DayExercise(req.body)
     try{
          const savedDayExercise = await newDayExercise.save()
          res.status(200).json({
               success: true, 
               message: 'Tạo buổi tập thành công',
               data: savedDayExercise})
     }catch(err){
          console.log(err)
          res.status(500).json({
               success: false, 
               message: 'Server có lỗi'})
     }
}



export const getSingleDayExercise = async (req, res) => {
     const id = req.params.id
     try{
          const dayExercise = await DayExercise.findById(id)

          res.status(200).json({
               success: true, 
               message: 'Successfully',
               data: dayExercise})
     }catch(err){
          res.status(404).json({
               success: false, 
               message: 'not found'})
     }
}

// delete food
export const deletedDayExercise = async (req, res) => {
     const id = req.params.id
     try{
          await DayExercise.findByIdAndDelete(id)

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
export const getAllDayExercise = async (req, res) => {
     //for pagination
     const page = parseInt(req.query.page)

     try{
          const dayexercises = await DayExercise.find({})
          
          res.status(200).json({
               success: true, 
               count: dayexercises.length,
               message: 'Successfully ',
               data: dayexercises})
     }catch(err){
          res.status(404).json({
               success: false, 
               message: 'not found'})
     } 
}