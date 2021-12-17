import { Router } from 'express'
import authRouter from './auth.router'
import patientRouter from './patient'
import userRouter from './user.router'
import userTypeRouter from './userType.router'
import collegeUnitRouter from './collegeUnit.router'

const routes = Router()

routes.use('/auth', authRouter)
routes.use('/alunos', patientRouter)
routes.use('/usuarios', userRouter)
routes.use('/user-type', userTypeRouter)
routes.use('/college-unit', collegeUnitRouter)

export default routes