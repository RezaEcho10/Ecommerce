import express from 'express'
const router = express.Router()
import { Signup, Login } from '../controllers/user.js'

router.post('/register', Signup)
router.post('/login' , Login)

export default router