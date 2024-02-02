import express from 'express'
import { updateUser, deleteUser, getSingleUser, getAllUser, getUserBySearch, batchRequest } from '../controllers/userController.js'
const router = express.Router()

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

// update user
router.put('/:id', verifyUser, updateUser)

// delete user
router.delete('/:id', verifyUser, deleteUser)

//get single user
router.get('/:id', getSingleUser)

// get all user
router.get('/', verifyAdmin, getAllUser)
// router.get('/',  getAllUser)

router.get('/search/getUserBySearch', getUserBySearch)

router.get('/batch', batchRequest)

export default router