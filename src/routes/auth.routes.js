import { Router } from 'express'

import { Login, Register } from '../handlers/auth.handler.js'
import { IsAuthenticated } from '../middleware/auth.js'

const router = Router()

router.post('/login', Login)
router.post('/register', IsAuthenticated, Register)

export default router