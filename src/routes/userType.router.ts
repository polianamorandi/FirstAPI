import { Router } from 'express'
import { getRepository } from 'typeorm'
import UserType from '../models/UserType'
import { CreateUserTypeService } from '../services/userType'

const userTypeRouter = Router()

userTypeRouter.get('/', async (_,resp) => {
  const userTypeRepository = getRepository(UserType)
  const userTypes = await userTypeRepository.find()
  resp.json(userTypes)
})

userTypeRouter.get('/:id', async (req, resp) => {
  const { id } = req.params
  const userTypeRepository = getRepository(UserType)
  const userType = await userTypeRepository.findOne({ where: { id }})
  resp.json(userType)
})

userTypeRouter.post('/', async (req, resp) => {
  try {
    const { name } = req.body

    const createUserType = new CreateUserTypeService()
    const userType = await createUserType.execute({ name })
    resp.json(userType)
  } catch (error: any) {
    return resp.status(400).json({ message: error.message })
  }
})

export default userTypeRouter