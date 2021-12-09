import { v4 as uuid } from 'uuid'

class User {
  id: string;
  name: string;
  email: string;
  type: string;

  constructor(name: string, email: string, type: string) {
    this.id = uuid()
    this.name = name
    this.email = email
    this.type = type
  }
}

export default User