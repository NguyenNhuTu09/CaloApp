import express from 'express'
import { createExercise, getAllExercise, getSingleExercise, deleteExercise } from '../controllers/exerciseController.js'

const router = express.Router()

// create Exercise
router.post('/', createExercise)

// get All Exercise
router.get('/', getAllExercise)

// get single Exercise
router.get('/:id', getSingleExercise)

// delete Exercise
router.delete('/:id', deleteExercise)

export default router