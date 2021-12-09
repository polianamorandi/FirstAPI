import User from '../models/User'

const usuarios: User[] = [
    {
        id: '5f45dee3-d074-4a2c-8afb-a1db752dfd06',
        name: 'Poliana Morandi Duarte da Costa',
        email: 'poliana@gmail.com',
        type: 'admin',
    },
    {
        id: 'c04efb37-fbbf-480e-9700-99a451c0c7ab',
        name: 'Wesley Hildebrand',
        email: 'gestel@gmail.com',
        type: 'simple',
    }
]

class UserRepository {
  private users: User[]

  constructor() {
    this.users = usuarios
  }

  public getAll () {
    return this.users
  }

  public getById (id: string) {
    return this.users.filter(user => user.id === id)
  }

  public create(name: string, email: string, type: string): User {
    const newUser = new User(name, email, type)
    this.users.push(newUser)
    return newUser
  }
}

export default UserRepository