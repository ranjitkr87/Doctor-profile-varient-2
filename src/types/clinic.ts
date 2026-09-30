export interface TreatmentItem {
  id: string;
  number: string;
  category: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  indications: string[];
  keyDiagnostics: string[];
  preparationInstructions: string;
  consultationFee: string;
  typicalDuration: string;
}

export interface DoctorCredential {
  label: string;
  detail: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  treatment: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'appointments' | 'diagnostics' | 'insurance' | 'clinic';
}

export interface TimeSlot {
  time: string;
  period: 'morning' | 'evening';
  available: boolean;
}

export interface AppointmentBooking {
  id: string;
  patientName: string;
  phoneNumber: string;
  email: string;
  age: string;
  gender: string;
  serviceId: string;
  serviceName: string;
  date: string;
  slot: string;
  notes?: string;
  createdAt: string;
  status: 'Confirmed' | 'Pending Review';
}
