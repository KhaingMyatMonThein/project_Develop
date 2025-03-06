import React from 'react';
import { Typography, Container } from '@mui/material';

const Reviews = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" sx={{ my: 4 }}>
        Reviews
      </Typography>
      <Typography>
        This is the reviews page content.
      </Typography>
    </Container>
  );
};

export default Reviews;
