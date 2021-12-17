import { Router } from 'express'
import { getRepository } from 'typeorm'
import CollegeUnit from '../models/CollegeUnit'

const collegeUnitRouter = Router()

collegeUnitRouter.get('/', async (_,resp) => {
  const collegeUnitRepository = getRepository(CollegeUnit)
  const collegeUnits = await collegeUnitRepository.find()
  resp.json(collegeUnits)
})

collegeUnitRouter.post('/', async (req, resp) => {
  try {
    const { name } = req.body

    const collegeUnitRepository = getRepository(CollegeUnit)
    const collegeUnit = collegeUnitRepository.create({ name })
    await collegeUnitRepository.save(collegeUnit)
    resp.json(collegeUnit)
  } catch (error: any) {
    return resp.status(400).json({ message: error.message })
  }
})

export default collegeUnitRouter