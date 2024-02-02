import express from "express";
import { FoodLike, DeleteLikeFood } from "../controllers/postController.js";
import Food from "../models/Food.js"
const router = express.Router()

// create dayFood
router.post('/like/:id', FoodLike)
router.delete('/dlike/:id', DeleteLikeFood)

export default router