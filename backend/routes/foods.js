import express from 'express'
import { createFood, updateFood, deleteFood, getSingleFood, getAllFood } from '../controllers/foodController.js'
import {verifyAdmin} from '../utils/verifyToken.js'

const router = express.Router()
//create new food
router.post('/',createFood)

//update food
router.put('/:id', updateFood)

//delete food
router.delete('/:id',deleteFood)

//get single food
router.get('/:id', getSingleFood)

//get alls food
router.get('/', getAllFood)

// // get food by search
// router.get('/search/getFoodBySearch', getFoodBySearch)
// router.get('/search/getFeaturedFoods', getFeaturedFood)
// router.get('/search/getFoodCount', getFoodCount)


export default router;
