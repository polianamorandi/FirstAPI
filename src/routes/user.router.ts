import { Router } from 'express'
import { getCustomRepository } from 'typeorm'
import UserRepository from '../repositories/UserRepository'
import { CreateUserService } from '../services/user'

const userRouter = Router()

userRouter.get('/', async (_,resp) => {
  const userRepository = getCustomRepository(UserRepository)
  const users = await userRepository.getAll()
  resp.json(users)
})

userRouter.get('/:id', async (req,resp) => {
  const userRepository = getCustomRepository(UserRepository)
  const user = await userRepository.getById(req.params.id)
  resp.json(user)
})

userRouter.post('/', async (req,resp) => {
  try {
    const { name, email, password, type } = req.body

    const createUser = new CreateUserService()
    const user = await createUser.execute({ name, email, password, type })
    delete user.password
    delete user.deleted_at
    resp.json(user)
  } catch (error: any) {
    return resp.status(400).json({ message: error.message })
  }
})

export default userRouter