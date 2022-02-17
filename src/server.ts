import 'reflect-metadata'
import express, { Request, Response, NextFunction, response } from 'express'
import 'express-async-errors'

import AppError from './errors/AppError'
import routes from './routes'

import './database'

const app = express()

app.use(express.json())
app.use((_, resp, next) => {
  resp.header('Access-Control-Allow-Origin', '*')
  resp.header('Access-Control-Allow-Methods', '*')
  resp.header('Access-Control-Allow-Headers', '*')
  resp.header('Access-Control-Allow-Credentials', 'true')
  next()
})

app.use(routes)

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'erro',
      message: err.message
    })
  }

  return res.status(500).json({
    status: 'erro',
    message: 'Erro interno'
  })

})

app.listen(3333, () => {
  console.log('Server runing on port 3333...')
})