import express from 'express'
import { searchInfor } from '../controllers/searchController.js'
const router = express.Router()

router.get("/searchInfor", searchInfor)

export default router