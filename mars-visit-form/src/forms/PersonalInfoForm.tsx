import React from 'react';
import { TextField } from '@mui/material';
import { PersonalInfo } from '../types/form';
import { useFormikContext } from 'formik';

const PersonalInfoForm: React.FC = () => {
  const { values, handleChange, handleBlur, errors, touched } = useFormikContext<{
    personalInfo: PersonalInfo;
  }>();

  return (
    <>
      <TextField
        fullWidth
        margin="normal"
        id="personalInfo.fullName"
        name="personalInfo.fullName"
        label="Full Name"
        value={values.personalInfo.fullName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.personalInfo?.fullName && Boolean(errors.personalInfo?.fullName)}
        helperText={(touched.personalInfo?.fullName && errors.personalInfo?.fullName) || "Enter your full name (e.g., John Smith)"}
      />
      <TextField
        fullWidth
        margin="normal"
        id="personalInfo.dateOfBirth"
        name="personalInfo.dateOfBirth"
        label="Date of Birth"
        type="date"
        value={values.personalInfo.dateOfBirth}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.personalInfo?.dateOfBirth && Boolean(errors.personalInfo?.dateOfBirth)}
        helperText={(touched.personalInfo?.dateOfBirth && errors.personalInfo?.dateOfBirth) || "Select your date of birth"}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        fullWidth
        margin="normal"
        id="personalInfo.nationality"
        name="personalInfo.nationality"
        label="Nationality"
        value={values.personalInfo.nationality}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.personalInfo?.nationality && Boolean(errors.personalInfo?.nationality)}
        helperText={(touched.personalInfo?.nationality && errors.personalInfo?.nationality) || "Enter your nationality (e.g., American, Canadian)"}
      />
      <TextField
        fullWidth
        margin="normal"
        id="personalInfo.email"
        name="personalInfo.email"
        label="Email"
        type="email"
        value={values.personalInfo.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.personalInfo?.email && Boolean(errors.personalInfo?.email)}
        helperText={(touched.personalInfo?.email && errors.personalInfo?.email) || "Enter a valid email (e.g., john.smith@email.com)"}
      />
      <TextField
        fullWidth
        margin="normal"
        id="personalInfo.phone"
        name="personalInfo.phone"
        label="Phone"
        value={values.personalInfo.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.personalInfo?.phone && Boolean(errors.personalInfo?.phone)}
        helperText={(touched.personalInfo?.phone && errors.personalInfo?.phone) || "Enter phone number (e.g., 123-456-7890)"}
      />
    </>
  );
};

export default PersonalInfoForm;
