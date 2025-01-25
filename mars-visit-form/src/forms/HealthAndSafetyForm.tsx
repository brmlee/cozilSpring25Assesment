import React from 'react';
import { TextField, FormControlLabel, Checkbox, FormHelperText, Box } from '@mui/material';
import { HealthAndSafety } from '../types/form';
import { useFormikContext } from 'formik';

const HealthAndSafetyForm: React.FC = () => {
  const { values, handleChange, handleBlur, errors, touched } = useFormikContext<{
    healthAndSafety: HealthAndSafety;
  }>();

  return (
    <>
      <Box sx={{ mb: 2 }}>
        <FormControlLabel
          control={
            <Checkbox
              id="healthAndSafety.healthDeclaration"
              name="healthAndSafety.healthDeclaration"
              checked={values.healthAndSafety.healthDeclaration}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          }
          label="I declare that I am in good health and fit for space travel"
        />
        {touched.healthAndSafety?.healthDeclaration && errors.healthAndSafety?.healthDeclaration && (
          <FormHelperText error>
            {errors.healthAndSafety.healthDeclaration}
          </FormHelperText>
        )}
        <FormHelperText>
          You must confirm that you are physically fit for space travel
        </FormHelperText>
      </Box>
      <TextField
        fullWidth
        margin="normal"
        id="healthAndSafety.emergencyContactName"
        name="healthAndSafety.emergencyContactName"
        label="Emergency Contact Name"
        value={values.healthAndSafety.emergencyContactName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.healthAndSafety?.emergencyContactName && Boolean(errors.healthAndSafety?.emergencyContactName)}
        helperText={(touched.healthAndSafety?.emergencyContactName && errors.healthAndSafety?.emergencyContactName) || 
          "Enter the full name of your emergency contact (e.g., Jane Smith)"}
      />
      <TextField
        fullWidth
        margin="normal"
        id="healthAndSafety.emergencyContactPhone"
        name="healthAndSafety.emergencyContactPhone"
        label="Emergency Contact Phone"
        value={values.healthAndSafety.emergencyContactPhone}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.healthAndSafety?.emergencyContactPhone && Boolean(errors.healthAndSafety?.emergencyContactPhone)}
        helperText={(touched.healthAndSafety?.emergencyContactPhone && errors.healthAndSafety?.emergencyContactPhone) || 
          "Enter emergency contact's phone number (e.g., 123-456-7890)"}
      />
      <TextField
        fullWidth
        margin="normal"
        id="healthAndSafety.medicalConditions"
        name="healthAndSafety.medicalConditions"
        label="Medical Conditions (if any)"
        multiline
        rows={4}
        value={values.healthAndSafety.medicalConditions}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.healthAndSafety?.medicalConditions && Boolean(errors.healthAndSafety?.medicalConditions)}
        helperText={(touched.healthAndSafety?.medicalConditions && errors.healthAndSafety?.medicalConditions) || 
          "Optional: List any medical conditions, allergies, or medications (e.g., asthma, penicillin allergy)"}
      />
    </>
  );
};

export default HealthAndSafetyForm;
