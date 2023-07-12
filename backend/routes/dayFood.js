import express from "express";
import { createDayFood, getSingleDayFood, deletedDayFood, getAllDayFood } from "../controllers/dayFoodController.js";

const router  = express.Router()

// create dayFood
router.post('/', createDayFood)

// get dayFood
router.get('/:id', getSingleDayFood)

// get all dayFood
router.get('/', getAllDayFood)

// delete dayFood
router.delete('/:id', deletedDayFood)

export default router