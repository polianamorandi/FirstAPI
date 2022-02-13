import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import AppError from '../../errors/AppError'
import JWT_CONFIG from '../../config/auth'
import User from '../../models/User'

interface Request {
  email: string;
  password: string;
}

interface Response {
  name: string;
  token: string;
}

class CreateSession {
  public async execute({ email, password }: Request): Promise<Response> {
    const userRepository = getRepository(User)

    const user = await userRepository.findOne({
      where: { email }
    })

    if(!user) throw new AppError("Usuário ou senha incorretos.", 401)

    const validPassword = await compare(password, user.password || '')

    if(!validPassword) throw new AppError("Usuário ou senha incorretos.", 401)

    const token = sign(
      {
        type: user.type
      },
      JWT_CONFIG.secret,
      {
        subject: user.id,
        expiresIn: JWT_CONFIG.expiresIn,
      }
    )

    return { name: user.name, token }

  }
}

export default CreateSession