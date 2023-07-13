import express from 'express'
import { createDayPlan, getAllDayPlan, getSingleDayPlan, deletedDayPlan } from '../controllers/dayPlanController.js'

const router  = express.Router()

// create dayPlan
router.post('/', createDayPlan)

// get dayPlan
router.get('/:id', getSingleDayPlan)

// get all dayPlan
router.get('/', getAllDayPlan)

// delete dayPlan
router.delete('/:id', deletedDayPlan)

export default router