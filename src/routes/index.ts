import { Router } from 'express'
import patientRouter from './patient'
import userRouter from './user.router'
import userTypeRouter from './userType.router'

const routes = Router()

routes.use('/alunos', patientRouter)
routes.use('/usuarios', userRouter)
routes.use('/user-type', userTypeRouter)

export default routes