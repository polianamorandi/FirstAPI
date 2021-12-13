import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
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

    if(!user) throw new Error("Usuário ou senha incorretos.")

    const validPassword = await compare(password, user.password || '')

    if(!validPassword) throw new Error("Usuário ou senha incorretos.")

    const token = sign(
      {
        type: user.type
      },
      'dev_hash',
      {
        subject: user.id,
        expiresIn: '1d',
      }
    )

    return { name: user.name, token }

  }
}

export default CreateSession