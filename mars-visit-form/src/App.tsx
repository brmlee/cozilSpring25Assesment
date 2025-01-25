import React, { useState } from 'react';
import { Container, Paper, Typography, Button, Box, Stepper, Step, StepLabel } from '@mui/material';
import { Formik, Form } from 'formik';
import { validationSchema } from './utils/validationSchema';
import PersonalInfoForm from './forms/PersonalInfoForm';
import TravelPreferencesForm from './forms/TravelPreferencesForm';
import HealthAndSafetyForm from './forms/HealthAndSafetyForm';
import SuccessPage from './components/SuccessPage';
import { MarsApplicationForm } from './types/form';
import * as Yup from 'yup';

const steps = ['Personal Information', 'Travel Preferences', 'Health and Safety'];

const initialValues: MarsApplicationForm = {
  personalInfo: {
    fullName: '',
    dateOfBirth: '',
    nationality: '',
    email: '',
    phone: '',
  },
  travelPreferences: {
    departureDate: '',
    returnDate: '',
    accommodation: 'Space Hotel',
    specialRequests: '',
  },
  healthAndSafety: {
    healthDeclaration: false,
    emergencyContactName: '',
    emergencyContactPhone: '',
    medicalConditions: '',
  },
};

const App: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getStepValidation = (step: number) => {
    switch (step) {
      case 0:
        return Yup.object().shape({
          personalInfo: validationSchema.fields.personalInfo
        });
      case 1:
        return Yup.object().shape({
          travelPreferences: validationSchema.fields.travelPreferences
        });
      case 2:
        return Yup.object().shape({
          healthAndSafety: validationSchema.fields.healthAndSafety
        });
      default:
        return validationSchema;
    }
  };

  const handleNext = async (validateForm: () => Promise<any>, values: MarsApplicationForm) => {
    try {
      const stepValidation = getStepValidation(activeStep);
      await stepValidation.validate(values, { abortEarly: false });
      
      setValidationErrors([]);
      setActiveStep((prevStep) => prevStep + 1);
    } catch (err) {
      if (err instanceof Error) {
        console.error('Validation errors:', err);
        setValidationErrors(err.message.split('\n'));
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
    setValidationErrors([]);
  };

  const getCurrentForm = () => {
    switch (activeStep) {
      case 0:
        return <PersonalInfoForm />;
      case 1:
        return <TravelPreferencesForm />;
      case 2:
        return <HealthAndSafetyForm />;
      default:
        return null;
    }
  };

  const handleSubmit = (values: MarsApplicationForm) => {
    console.log('Form submitted:', values);
    setIsSubmitted(true);
  };

  const handleRestart = () => {
    setIsSubmitted(false);
    setActiveStep(0);
    setValidationErrors([]);
  };

  if (isSubmitted) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <SuccessPage onRestart={handleRestart} />
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Mars Visit Application
        </Typography>

        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnChange={true}
          validateOnBlur={true}
        >
          {({ validateForm, values, isValid }) => (
            <Form>
              {getCurrentForm()}

              {validationErrors.length > 0 && (
                <Box sx={{ mt: 2, color: 'error.main' }}>
                  <Typography variant="subtitle2">Please fix the following errors:</Typography>
                  <ul>
                    {validationErrors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </Box>
              )}

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                <Button
                  variant="contained"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  Back
                </Button>
                {activeStep === steps.length - 1 ? (
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={!isValid}
                  >
                    Submit
                  </Button>
                ) : (
                  <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    onClick={() => handleNext(validateForm, values)}
                  >
                    Next
                  </Button>
                )}
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default App;
