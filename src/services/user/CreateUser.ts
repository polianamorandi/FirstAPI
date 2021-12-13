import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'
import User from '../../models/User'

interface Request {
  name: string;
  email: string;
  password: string;
  type: string;
}

class CreateUser {

  public async execute ({ name, email, password, type }: Request): Promise<User> {
    const userRepository = getRepository(User)

    const hasUser = await userRepository.findOne({
      where: { email }
    })

    if(hasUser) throw new Error("Email já cadastrado")

    const hashedPassword = await hash(password, 8)
    const user = userRepository.create({ name, email, password: hashedPassword, type })
    await userRepository.save(user)
    return user
  }
}

export default CreateUser