import express from "express";
import { createPlan, getAllPlan, getSinglePlan, deletedPlan, updatePlan } from "../controllers/planController.js";

const router  = express.Router()

// create dayFood
router.post('/user/:id', createPlan)

// get dayFood
router.get('/:id', getSinglePlan)

// get all dayFood
router.get('/', getAllPlan)

// delete dayFood
router.delete('/:id', deletedPlan)

router.put('/:id', updatePlan)

export default router