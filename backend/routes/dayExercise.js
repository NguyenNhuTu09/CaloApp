import express from 'express'
import { createDayExercise, getAllDayExercise, getSingleDayExercise, deletedDayExercise } from '../controllers/dayExerController.js'

const router  = express.Router()

// create dayExercise
router.post('/', createDayExercise)

// get dayExercise
router.get('/:id', getSingleDayExercise)

// get all dayExercise
router.get('/', getAllDayExercise)

// delete dayExercise
router.delete('/:id', deletedDayExercise)

export default router