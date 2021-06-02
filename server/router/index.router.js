import express from 'express'
import image from './image.router'

const router = express.Router()

router.use(image)

export default router