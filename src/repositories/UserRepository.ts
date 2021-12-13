import User from '../models/User'
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(User)
class UserRepository extends Repository<User> {
  public async getAll (): Promise<User[] | []> {
    const user = await this.createQueryBuilder('user')
      .select(['user.id', 'user.name', 'user.email', 'user.type', 'user.created_at', 'user.updated_at'])
      .getMany()
    return user || []
  }

  public async getById (id: string): Promise<User | null> {
    const user = await this.createQueryBuilder('user')
      .select(['user.id', 'user.name', 'user.email', 'user.type', 'user.created_at', 'user.updated_at'])
      .where('user.id = :id', { id })
      .getOne()
    return user || null
  }
}

export default UserRepository