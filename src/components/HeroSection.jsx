import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(AI.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '600px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 2, color: '#ff9800' }}>
        ENABLING Remote BUSINESS Operations WITH CLOUD-BASED
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, maxWidth: '600px' }}>
        Cloud-based solutions have allowed businesses to shift their operations to remote, allowing employees to work with an internet connection.
      </Typography>
      <Box>
        <Button variant="contained" color="warning" sx={{ mr: 2 }}>
          Our Services
        </Button>
        <Button variant="outlined" color="warning">
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
