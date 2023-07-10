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