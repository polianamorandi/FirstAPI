import { Router } from 'express'
import authRouter from './auth.router'
import patientRouter from './patient'
import userRouter from './user.router'
import userTypeRouter from './userType.router'

const routes = Router()

routes.use('/auth', authRouter)
routes.use('/alunos', patientRouter)
routes.use('/usuarios', userRouter)
routes.use('/user-type', userTypeRouter)

export default routes