import User from "../models/User.js";
import Food from '../models/Food.js';
import Exercise from '../models/Exercise.js'

export const searchInfor = async(req, res) => {
     // const userName = new RegExp(req.query.userName, 'i')
     // const nameFood = new RegExp(req.query.nameFood, 'i')
     // const nameExer = new RegExp(req.query.nameExer, 'i')

     const { query } = req.query;
     try {
          // const users = await User.find({userName})
          // const foods = await Food.find({nameFood})
          // const exers = await Exercise.find({nameExer})

          const userResults = await User.find({ $text: { $search: query } });
          const foodResults = await Food.find({ $text: { $search: query } });
          const exerciseResults = await Exercise.find({ $text: { $search: query } });

          const userCount = await User.countDocuments({ $text: { $search: query } });
          const foodCount = await Food.countDocuments({ $text: { $search: query } });
          const exerciseCount = await Exercise.countDocuments({ $text: { $search: query } });

          const results = {
               users: {
                    count: userCount,
                    data: userResults,
               },
               foods: {
                    count: foodCount, 
                    data: foodResults,
               },
               exercises: {
                    count: exerciseCount,
                    data: exerciseResults,
               },
          };
          res.status(200).json({
               success: true, 
               message: 'Successfully ',
               data: results})
     } catch (error) {
          console.log(error)
          res.status(404).json({
               success: false, 
               message: 'not found'})
     }
}


export const handlerSearchFood = async(req, res) => {
     
}