import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(/AI.jpg)`, // Use the correct path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '600px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        marginTop:'50px',
      }}
    >
      <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 2, color: '#ff9800' }}>
        ENABLING Remote BUSINESS Operations WITH CLOUD-BASED
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, maxWidth: '600px' }}>
        Cloud-based solutions have allowed businesses to shift their operations to remote, allowing employees to work with an internet connection.
      </Typography>
      <Box>
        <Button variant="contained" color="warning" sx={{ mr: 2 }} component={Link} to="/services">
          Our Services
        </Button>
        <Button variant="outlined" color="warning" component={Link} to="/contactus">
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
