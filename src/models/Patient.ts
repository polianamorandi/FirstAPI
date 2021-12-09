import { v4 as uuid } from 'uuid'

class Patient {
  id: string;
  name: string;
  rgm: string;
  email: string;
  course: string;
  period: string;
  lastAppointment: Date;
  // entryYear
  // dataDeNascimeto
  // endereço
  // numero
  // bairro
  // cidadeAtual
  // Cidade Natal
  // estado civil
  // identidade de genero
  // telefone
  // email

  constructor(name: string, rgm: string, email: string, course: string, period: string) {
    this.id = uuid()
    this.name = name
    this.rgm = rgm
    this.email = email
    this.course = course
    this.period = period
    this.lastAppointment = new Date()
  }
}

export default Patient