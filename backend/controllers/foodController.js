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

// //get tour by search
// export const getTourBySearch = async(req, res) => {
//      //here 'i' means case sentitive
//      const city = new RegExp(req.query.city, 'i') 
//      const distance = parseInt(req.query.distance)
//      const maxGroupSize = parseInt(req.query.maxGroupSize)

//      try{
//           //gte means greater than equal
//           const tours = await Tour.find({city, distance:{$gte: distance},
//           maxGroupSize: {$gte:maxGroupSize}}).populate('reviews')

//           res.status(200).json({
//                success: true, 
//                message: 'Successfully ',
//                data: tours})
          
//      }catch(err){
//           res.status(404).json({
//                success: false, 
//                message: 'not found'})
//      }
// }




// //get featured tour
// export const getFeaturedTour = async (req, res) => {

//      try{
//           const tours = await Tour.find({featured: true}).populate('reviews').limit(8)
          
//           res.status(200).json({
//                success: true, 
//                message: 'Successfully ',
//                data: tours})
//      }catch(err){
//           res.status(404).json({
//                success: false, 
//                message: 'not found'})
//      } 
// }


// // get tour counts

// export const getTourCount = async(req, res) => {
//      try{
//           const tourCount = await Tour.estimatedDocumentCount()
//           res.status(200).json({success: true, data: tourCount})
//      }catch(err){
//           res.status(500).json({success: false, message: 'failed to fetch'})
//      }
// }