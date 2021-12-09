
import { Router } from 'express'
import PatientRepository from '../repositories/PatientRepository'

const patientRouter = Router()

const repository = new PatientRepository()

patientRouter.get('/', (_,resp) => {
  const users = repository.getAll()
  resp.json(users)
})

patientRouter.get('/:id', (req,resp) => {
    const user = repository.getById(req.params.id)
    resp.json(user)
})

patientRouter.post('/', (req,resp) => {
    const { name, rgm, email, course, period } = req.body
    const newUser = repository.create(name, rgm, email, course, period)
    resp.json(newUser)
})

export default patientRouter