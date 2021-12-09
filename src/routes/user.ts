import { Router } from 'express'
import UserRepository from '../repositories/UserRepository'

const userRouter = Router()
const repository = new UserRepository()

userRouter.get('/', (_,resp) => {
  const users = repository.getAll()
  resp.json(users)
})

userRouter.get('/:id', (req,resp) => {
    const user = repository.getById(req.params.id)
    resp.json(user)
})

userRouter.post('/', (req,resp) => {
    const { name, email, type } = req.body
    const newUser = repository.create(name, email, type)
    resp.json(newUser)
})

export default userRouter