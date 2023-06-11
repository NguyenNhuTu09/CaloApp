import Food from '../models/Food.js'

// create new food
export const createFood = async(req, res) => {
     const newFood = new Food(req.body)
     try{
          const savedFood = await newFood.save()
          res.status(200).json({
               success: true, 
               message: 'Successfully created',
               data: savedFood})
     }catch(err){
          res.status(500).json({
               success: false, 
               message: 'Failed to create. Try again'})
     }
}

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
          const foods = await Food.find({}).populate('Type')
          
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
