import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

interface SuccessPageProps {
  onRestart: () => void;
}

const SuccessPage: React.FC<SuccessPageProps> = ({ onRestart }) => {
  return (
    <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
      <RocketLaunchIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
      <Typography variant="h4" component="h2" gutterBottom>
        Application Submitted Successfully!
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
        Thank you for applying to visit Mars
      </Typography>
      <Box sx={{ mb: 4 }}>
        <Typography variant="body1" paragraph>
          We have received your application and will review it shortly.
        </Typography>
        <Typography variant="body1" paragraph>
          You will receive a confirmation email with further instructions.
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={onRestart}
        sx={{ mt: 2 }}
      >
        Submit Another Application
      </Button>
    </Paper>
  );
};

export default SuccessPage;
