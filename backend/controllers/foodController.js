import Food from '../models/Food.js'
import User from '../models/User.js'

// create new food
export const createFood = async(req, res) => {
     const newFood = new Food(req.body)
     try{
          const savedFood = await newFood.save()
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

// export const createFood = async (req, res) => {
//      // Lấy ID của người tạo từ request hoặc session
//      const authorId = req.user._id;
   
//      // Tạo một document mới và thêm ID của người tạo vào document
//      const newFood = new Food({
//        ...req.body,
//        author: authorId,
//      });
   
//      try {
//        const savedFood = await newFood.save();
//        res.status(200).json({
//          success: true,
//          message: "Tạo món ăn thành công",
//          data: savedFood,
//        });
//      } catch (err) {
//        console.log(err);
//        res.status(500).json({
//          success: false,
//          message: "Server có lỗi",
//        });
//      }
//    };



// export const createFood = async(req, res) => {
//      try{
//           const {nameFood, 
//                Type, 
//                imageFood, 
//                support, 
//                ration, 
//                totalCalories, 
//                mainMaterial, 
//                auxiliaryMaterials, Additives, processing, description, reviews} = req.body;
//                let food = await Food.findOne({nameFood})
//                if(food){
//                     return res.status(400).json({message: "Món ăn đã có trên thực đơn, đổi tên khác"})
//                }
//                food = new Food({nameFood, 
//                     Type, 
//                     imageFood, 
//                     support, 
//                     ration, 
//                     totalCalories, 
//                     mainMaterial, 
//                     auxiliaryMaterials, Additives, processing, description, reviews})
//                     await food.save()
//                res.status(200).json({message: "Tạo món ăn thành công, xem lại trong thực đơn", data: food})
//      }catch(error){
//           console.log(error)
//           res.status(500).json({message: 'Server gặp vấn đề'})
//      }
     
// }

// update Food
export const updateFood = async (req, res) => {
     const id = req.params.id
     try{
          const updateFood = await Food.findByIdAndUpdate(id, {
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
export const deleteFood = async (req, res) => {
     const id = req.params.id
     try{
          await Food.findByIdAndDelete(id)

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
export const getSingleFood = async (req, res) => {
     const id = req.params.id
     try{
          const food = await Food.findById(id).populate('Type')

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
export const getAllFood = async (req, res) => {
     //for pagination
     const page = parseInt(req.query.page)

     try{
          const foods = await Food.find({})
          
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
export const getFoodCount = async(req, res) => {
     try{
          const foodCount = await Food.estimatedDocumentCount()
          res.status(200).json({success: true, data: foodCount})
     }catch(err){
          res.status(500).json({success: false, message: 'failed to fetch'})
     }
}
