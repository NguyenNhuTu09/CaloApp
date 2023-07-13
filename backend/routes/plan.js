import express from "express";
import { createPlan, getAllPlan, getSinglePlan, deletedPlan } from "../controllers/planController.js";

const router  = express.Router()

// create dayFood
router.post('/', createPlan)

// get dayFood
router.get('/:id', getSinglePlan)

// get all dayFood
router.get('/', getAllPlan)

// delete dayFood
router.delete('/:id', deletedPlan)

export default router