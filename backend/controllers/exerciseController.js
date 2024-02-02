import Exercise from '../models/Exercise.js'

// create new exercise
export const createExercise = async(req, res) => {
     const newExercise = new Exercise(req.body)
     try{
          const savedExercise = await newExercise.save()
          res.status(200).json({
               success: true, 
               message: 'Tạo bài tập thành công',
               data: savedExercise})
     }catch(err){
          console.log(err)
          res.status(500).json({
               success: false, 
               message: 'Server có lỗi'})
     }
}

// get all exercise
export const getAllExercise = async (req, res) => {
     //for pagination
     const page = parseInt(req.query.page)

     try{
          const exercises = await Exercise.find({})
          
          res.status(200).json({
               success: true, 
               count: exercises.length,
               message: 'Successfully ',
               data: exercises})
     }catch(err){
          res.status(404).json({
               success: false, 
               message: 'not found'})
     } 
}

// get single exercise
export const getSingleExercise = async (req, res) => {
     const id = req.params.id
     try{
          const exercise = await Exercise.findById(id)

          res.status(200).json({
               success: true, 
               message: 'Successfully ',
               data: exercise})
     }catch(err){
          res.status(404).json({
               success: false, 
               message: 'not found'})
     }
}

// delete exercise
export const deleteExercise = async (req, res) => {
     const id = req.params.id
     try{
          await Exercise.findByIdAndDelete(id)

          res.status(200).json({
               success: true, 
               message: 'Successfully deleted'})
     }catch(err){
          res.status(500).json({
               success: false, 
               message: 'Failed to delete'})
     }
}