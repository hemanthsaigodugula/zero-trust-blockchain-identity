import { Router } from 'express'
import { getRiskyEvents, getStats } from '../controllers/admin.controller.js'

const router = Router()

router.get('/risky-events', getRiskyEvents)
router.get('/stats', getStats)

export default router
