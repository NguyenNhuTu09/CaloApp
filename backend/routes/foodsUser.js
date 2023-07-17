import express from 'express'
import { createFoodUser, getFoodCountUser, updateFoodUser, deleteFoodUser, getSingleFoodUser, getAllFoodUser  } from '../controllers/foodUserControllers.js'
import {verifyAdmin} from '../utils/verifyToken.js'

const router = express.Router()
//create new food
router.post('/user/:id',createFoodUser)

//update food
router.put('/:id', updateFoodUser)

//delete food
router.delete('/:id',deleteFoodUser)

//get single food
router.get('/:id', getSingleFoodUser)

//get alls food
router.get('/', getAllFoodUser)

// // get food by search
// router.get('/search/getFoodBySearch', getFoodBySearch)
// router.get('/search/getFeaturedFoods', getFeaturedFood)
router.get('/search/getFoodCount', getFoodCountUser)


export default router;
