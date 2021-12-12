import 'reflect-metadata'
import express from 'express'
import routes from './routes'

import './database'

const app = express()

app.use(express.json())
app.use((_, resp, next) => {
  resp.header('Access-Control-Allow-Origin', '*')
  resp.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  resp.header('Access-Control-Allow-Headers', 'Content-Type')
  resp.header('Access-Control-Allow-Credentials', 'true')
  next()
})
app.use(routes)

app.listen(3333, () => {
  console.log('Server runing on port 3333...')
})