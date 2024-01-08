import express from 'express'
import { uploadImage, handleImageUpload, handleVideoUpload, uploadVideo} from '../controllers/fileController.js';

const router = express.Router();

router.post('/upload-image', handleImageUpload, uploadImage)
router.post('/upload-video', handleVideoUpload, uploadVideo)


export default router