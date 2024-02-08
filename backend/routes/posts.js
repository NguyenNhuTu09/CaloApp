import express from "express";
import { FoodLike, DeleteLikeFood, ExerciseLike, DeleteLikeExercise } from "../controllers/postController.js";
import Food from "../models/Food.js"
const router = express.Router()

// create dayFood
router.post('/like/:id', FoodLike)
router.delete('/dlike/:id', DeleteLikeFood)

router.post('/likeExer/:id', ExerciseLike)
router.delete('/dlikeExer/:id', DeleteLikeExercise)



export default router