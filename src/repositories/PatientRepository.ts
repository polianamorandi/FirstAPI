import Patient from '../models/Patient'

const pacientes: Patient[] = [
    {
        id: '1036560e-7d2a-48dc-bf84-0121c1e45bce',
        name: 'Poliana Morandi Duarte da Costa',
        rgm: '16565',
        email: 'poliana@gmail.com',
        course: 'Sistemas de Informações',
        period: 'Noturno',
        lastAppointment: new Date('2021-12-04'),
    },
    {
        id: '7f5048fc-4406-49fd-853c-4ae503b9f5dd',
        name: 'Wesley Hildebrand',
        rgm: '16565',
        email: 'gestel@gmail.com',
        course: 'Direito',
        period: 'Diurno',
        lastAppointment: new Date('2021-11-29')
    }
]

class PatientRepository {
  private patients: Patient[]

  constructor() {
    this.patients = pacientes
  }

  public getAll () {
    return this.patients
  }

  public getById (id: string) {
    return this.patients.filter(patient => patient.id === id)
  }

  public create(name: string, rgm: string, email: string, course: string, period: string): Patient {
    const newUser = new Patient(name, rgm, email, course, period)
    this.patients.push(newUser)
    return newUser
  }
}

export default PatientRepository