import { Router } from 'express'
import { accessResource } from '../controllers/access.controller.js'
import authMiddleware from '../middleware/auth.middleware.js'
import zeroTrust from '../middleware/zeroTrust.middleware.js'

const router = Router()

router.post('/resource', authMiddleware, zeroTrust, accessResource)

export default router
