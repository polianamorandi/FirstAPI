import { Router } from 'express'

import { CreateSessionService } from '../services/auth'

const authRouter = Router()

authRouter.post('/', async (req,resp) => {
  const { email, password } = req.body
  const createSessionService = new CreateSessionService()

  const { name, token } =  await createSessionService.execute({ email, password })
  resp.json({ name, token })
})

export default authRouter