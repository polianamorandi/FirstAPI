import { Router } from 'express'
import { CreateSessionService } from '../services/auth'

const authRouter = Router()

authRouter.post('/', async (req,resp) => {
  try {
    const { email, password } = req.body
    const createSessionService = new CreateSessionService()

    const { name, token } =  await createSessionService.execute({ email, password })
    resp.json({ name, token })
  } catch(error: any) {
    resp.status(400).json({ message: error.message })
  }
})

export default authRouter