import { Router } from 'express'
import patientRouter from './patient'
import userRouter from './user'

const routes = Router()

routes.use('/alunos', patientRouter)
routes.use('/usuarios', userRouter)

export default routes