export interface PersonalInfo {
  fullName: string;
  dateOfBirth: string;
  nationality: string;
  email: string;
  phone: string;
}

export interface TravelPreferences {
  departureDate: string;
  returnDate: string;
  accommodation: 'Space Hotel' | 'Martian Base';
  specialRequests: string;
}

export interface HealthAndSafety {
  healthDeclaration: boolean;
  emergencyContactName: string;
  emergencyContactPhone: string;
  medicalConditions: string;
}

export interface MarsApplicationForm {
  personalInfo: PersonalInfo;
  travelPreferences: TravelPreferences;
  healthAndSafety: HealthAndSafety;
}

export type FormStage = 'personal' | 'travel' | 'health';
