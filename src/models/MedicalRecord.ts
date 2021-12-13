class MedicalRecord {
  id: number;
  pacient: string;
  professional: string;
  appointments: string[];
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export default MedicalRecord;
