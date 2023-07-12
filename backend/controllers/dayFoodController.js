import DayFood from "../models/DayFood.js";


export const createDayFood = async(req, res) => {
     const newDayFood = new DayFood(req.body)
     try{
          const savedDayFood = await newDayFood.save()
          res.status(200).json({
               success: true, 
               message: 'Tạo bữa ăn thành công',
               data: savedDayFood})
     }catch(err){
          console.log(err)
          res.status(500).json({
               success: false, 
               message: 'Server có lỗi'})
     }
}



export const getSingleDayFood = async (req, res) => {
     const id = req.params.id
     try{
          const dayFood = await DayFood.findById(id)

          res.status(200).json({
               success: true, 
               message: 'Successfully',
               data: dayFood})
     }catch(err){
          res.status(404).json({
               success: false, 
               message: 'not found'})
     }
}

// delete food
export const deletedDayFood = async (req, res) => {
     const id = req.params.id
     try{
          await DayFood.findByIdAndDelete(id)

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
export const getAllDayFood = async (req, res) => {
     //for pagination
     const page = parseInt(req.query.page)

     try{
          const dayfoods = await DayFood.find({})
          
          res.status(200).json({
               success: true, 
               count: dayfoods.length,
               message: 'Successfully ',
               data: dayfoods})
     }catch(err){
          res.status(404).json({
               success: false, 
               message: 'not found'})
     } 
}