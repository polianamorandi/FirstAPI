import { getRepository } from 'typeorm'

import AppError from '../../errors/AppError'
import UserType from '../../models/UserType'

interface Request {
  name: string;
}

class CreateuserType {

  public async execute ({ name }: Request): Promise<UserType> {
    const userTypeRepository = getRepository(UserType)

    if(!name) throw new AppError("Precisa informar o nome do tipo")

    const userType = userTypeRepository.create({ name })
    await userTypeRepository.save(userType)
    return userType
  }
}

export default CreateuserType