import FoodUser from '../models/FoodUser.js'
import User from '../models/User.js'


// new create food user
export const createFoodUser = async(req, res) => {

     // hiện chỉ có cách này hoạt động, đã thêm được Food mới vào thẳng foods của user
     const newFood = new FoodUser(req.body)
     const id = req.params.id
     try{
          const savedFood = await newFood.save()

          const foodId = savedFood._id

          const updateFoodUser = await User.findById(id)

          console.log(updateFoodUser)
          if (!updateFoodUser) {
               return res.status(404).json({ message: 'Đăng nhập trước khi sử dụng ứng dụng' });
          }

          updateFoodUser.foods.push(foodId)
          await updateFoodUser.save()

          res.status(200).json({
               success: true, 
               message: 'Tạo món ăn thành công',
               data: savedFood})
     }catch(err){
          console.log(err)
          res.status(500).json({
               success: false, 
               message: 'Server có lỗi'})
     }
}


// update Food
export const updateFoodUser = async (req, res) => {
     const id = req.params.id
     try{
          const updateFood = await FoodUser.findByIdAndUpdate(id, {
               $set: req.body
          }, {new:true})

          res.status(200).json({
               success: true, 
               message: 'Successfully update',
               data: updateFood})
     }catch(err){
          res.status(500).json({
               success: false, 
               message: 'Failed to update'})
     }
}
// delete food
export const deleteFoodUser = async (req, res) => {
     const id = req.params.id
     try{
          await FoodUser.findByIdAndDelete(id)

          res.status(200).json({
               success: true, 
               message: 'Successfully deleted'})
     }catch(err){
          res.status(500).json({
               success: false, 
               message: 'Failed to delete'})
     }
}
// get single Food
export const getSingleFoodUser = async (req, res) => {
     const id = req.params.id
     try{
          const food = await FoodUser.findById(id).populate('Type')

          res.status(200).json({
               success: true, 
               message: 'Successfully ',
               data: food})
     }catch(err){
          res.status(404).json({
               success: false, 
               message: 'not found'})
     }
}
// get All food
export const getAllFoodUser = async (req, res) => {
     //for pagination
     const page = parseInt(req.query.page)

     try{
          const foods = await FoodUser.find({})
          
          res.status(200).json({
               success: true, 
               count: foods.length,
               message: 'Successfully ',
               data: foods})
     }catch(err){
          res.status(404).json({
               success: false, 
               message: 'not found'})
     } 
}

// get food count
export const getFoodCountUser = async(req, res) => {
     try{
          const foodCount = await FoodUser.estimatedDocumentCount()
          res.status(200).json({success: true, data: foodCount})
     }catch(err){
          res.status(500).json({success: false, message: 'failed to fetch'})
     }
}
