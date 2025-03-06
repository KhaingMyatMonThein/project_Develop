import React from 'react';
import { Box, Typography, TextField, Button, Grid, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1e272d',
        color: 'white',
        padding: '32px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.1,
          backgroundImage: `url(footer-bg-pattern.png)`, 
          backgroundRepeat: 'repeat',
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={6} md={6}>
            <Box>
              <Typography variant="h6" component="div" sx={{ fontWeight: 700, color: '#ff9800' }}>
                AI Solution
              </Typography>
              <Typography variant="body2" sx={{ mt: 2, color: 'grey' }}>
              Room No.216, Shop House No.1, Times City Complex, Kamayut Township, Yangon.
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: 'grey' }}>
                +959 442180966
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: 'grey' }}>
                info@mydomain.com
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#ff9800' }}>
              Social
            </Typography>
            <Box>
              <Typography variant="body2" sx={{ mt: 1, color: 'grey' }}>
                Facebook
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: 'grey' }}>
                Instagram
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: 'grey' }}>
                LinkedIn
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: 'grey' }}>
                Twitter
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: 'grey' }}>
                YouTube
              </Typography>
            </Box>
          </Grid>

        

          <Grid item xs={4} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#ff9800' }}>
              Company
            </Typography>
            <Box>
              <Typography variant="body2" sx={{ mt: 1, color: 'grey' }}>
                About Us
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: 'grey' }}>
               Services & Conditions
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: 'grey' }}>
                Privacy Policy
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: 'grey' }}>
                Events
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: 'grey' }}>
              Contact Us
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'grey' }}>
           Khaing Myat Mon Thein
          </Typography>
          <Typography variant="body2" sx={{ color: 'grey' }}>
            © 2025 All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
