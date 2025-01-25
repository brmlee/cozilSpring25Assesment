import * as Yup from 'yup';

export const personalInfoSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Full name is required'),
  dateOfBirth: Yup.string()
    .required('Date of birth is required'),
  nationality: Yup.string()
    .min(2, 'Nationality must be at least 2 characters')
    .required('Nationality is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/, 'Invalid phone number format')
    .required('Phone number is required'),
});

export const travelPreferencesSchema = Yup.object().shape({
  departureDate: Yup.string()
    .required('Departure date is required'),
  returnDate: Yup.string()
    .required('Return date is required')
    .test('is-after-departure', 'Return date must be after departure date', 
      function(returnDate) {
        const { departureDate } = this.parent;
        if (!departureDate || !returnDate) return true;
        return new Date(returnDate) > new Date(departureDate);
    }),
  accommodation: Yup.string()
    .oneOf(['Space Hotel', 'Martian Base'], 'Please select a valid accommodation option')
    .required('Accommodation preference is required'),
  specialRequests: Yup.string()
    .nullable(),
});

export const healthAndSafetySchema = Yup.object().shape({
  healthDeclaration: Yup.boolean()
    .oneOf([true], 'You must declare that you are fit for space travel')
    .required('Health declaration is required'),
  emergencyContactName: Yup.string()
    .min(2, 'Emergency contact name must be at least 2 characters')
    .required('Emergency contact name is required'),
  emergencyContactPhone: Yup.string()
    .matches(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/, 'Invalid phone number format')
    .required('Emergency contact phone is required'),
  medicalConditions: Yup.string()
    .nullable(),
});

export const validationSchema = Yup.object().shape({
  personalInfo: personalInfoSchema,
  travelPreferences: travelPreferencesSchema,
  healthAndSafety: healthAndSafetySchema,
});
