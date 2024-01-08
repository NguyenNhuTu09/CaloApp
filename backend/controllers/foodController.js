import Food from '../models/Food.js'
import FoodUser from '../models/FoodUser.js'
import { uploadImage } from '../Upload/uploadImageCloud.js'
import User from '../models/User.js'
import admin from 'firebase-admin'
import response from 'express'
import jwt from 'jsonwebtoken'

export const createFood = async(req, res) => {
     // const newFood = new Food(req.body)
     try{
          const {userID, nameFood, typeFood, support, ration, calo, imageFood,
               mainMaterial, auxiliaryMaterials, additives, cookingMethod, descFood, country} = req.body
          let searchUser = await User.findById({_id: userID})

          if(searchUser.role == 'User'){
               const foodUser = FoodUser({userID, nameFood, typeFood, support, ration, calo, imageFood,
                    mainMaterial, auxiliaryMaterials, additives, cookingMethod, descFood, country})
               const savedFood = await foodUser.save()
               return res.status(200).json({
                    success: true, 
                    message: 'Tạo món ăn thành công',
                    data: savedFood})
          }
          const food = Food({userID, nameFood, typeFood, support, ration, calo, imageFood,
               mainMaterial, auxiliaryMaterials, additives, cookingMethod, descFood, country})
          const savedFood = await food.save()
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
          const food = await Food.findById(id)

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
