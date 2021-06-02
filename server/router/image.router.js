import express from 'express'
import imageController from '../controller/ImageController'

const router = express.Router()

router.post('/api/images/upload',imageController.saveImage)
router.get('/api/images',imageController.getImage)
router.get('/api/images/:id',imageController.getOneImage)
router.delete('/api/images/:id',imageController.deleteImage)

export default router 