import React from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import { TravelPreferences } from '../types/form';
import { useFormikContext } from 'formik';

const TravelPreferencesForm: React.FC = () => {
  const { values, handleChange, handleBlur, errors, touched } = useFormikContext<{
    travelPreferences: TravelPreferences;
  }>();

  return (
    <>
      <TextField
        fullWidth
        margin="normal"
        id="travelPreferences.departureDate"
        name="travelPreferences.departureDate"
        label="Departure Date"
        type="date"
        value={values.travelPreferences.departureDate}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.travelPreferences?.departureDate && Boolean(errors.travelPreferences?.departureDate)}
        helperText={(touched.travelPreferences?.departureDate && errors.travelPreferences?.departureDate) || "Select your preferred departure date"}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        fullWidth
        margin="normal"
        id="travelPreferences.returnDate"
        name="travelPreferences.returnDate"
        label="Return Date"
        type="date"
        value={values.travelPreferences.returnDate}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.travelPreferences?.returnDate && Boolean(errors.travelPreferences?.returnDate)}
        helperText={(touched.travelPreferences?.returnDate && errors.travelPreferences?.returnDate) || "Select your preferred return date (must be after departure date)"}
        InputLabelProps={{ shrink: true }}
      />
      <FormControl fullWidth margin="normal" error={touched.travelPreferences?.accommodation && Boolean(errors.travelPreferences?.accommodation)}>
        <InputLabel id="accommodation-label">Accommodation Preference</InputLabel>
        <Select
          labelId="accommodation-label"
          id="travelPreferences.accommodation"
          name="travelPreferences.accommodation"
          value={values.travelPreferences.accommodation}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Accommodation Preference"
        >
          <MenuItem value="Space Hotel">Space Hotel</MenuItem>
          <MenuItem value="Martian Base">Martian Base</MenuItem>
        </Select>
        <FormHelperText>
          {(touched.travelPreferences?.accommodation && errors.travelPreferences?.accommodation) || 
           "Select your preferred accommodation type"}
        </FormHelperText>
      </FormControl>
      <TextField
        fullWidth
        margin="normal"
        id="travelPreferences.specialRequests"
        name="travelPreferences.specialRequests"
        label="Special Requests or Preferences"
        multiline
        rows={4}
        value={values.travelPreferences.specialRequests}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.travelPreferences?.specialRequests && Boolean(errors.travelPreferences?.specialRequests)}
        helperText={(touched.travelPreferences?.specialRequests && errors.travelPreferences?.specialRequests) || 
          "Optional: Enter any special requests or preferences (e.g., dietary restrictions, medical accommodations)"}
      />
    </>
  );
};

export default TravelPreferencesForm;
