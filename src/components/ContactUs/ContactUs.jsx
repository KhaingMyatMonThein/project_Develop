import React from 'react';
import { Typography, Container, Grid, TextField, Button, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const ContactUs = () => {
  const mapStyle = {
    width: '100%', // Set width to 100%
    height: '300px', // Adjust height as needed
    border: '0',
  };

  return (
    <Container sx={{ mt:"100px" }} >
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          Let's Discuss Your Opportunity
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          We're here to help.  Please fill out the form below and we'll get back to you as soon as possible.
        </Typography>
      </Box>

      {/* Contact Form */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2, color: '#E67E22' }}>
            01. Tell Us About Yourself
          </Typography>
          <TextField fullWidth label="First Name" margin="normal" variant="outlined" />
          <TextField fullWidth label="Last Name" margin="normal" variant="outlined" />
          <TextField fullWidth label="Email Address" margin="normal" variant="outlined" />
          <TextField fullWidth label="Phone" margin="normal" variant="outlined" />
          <TextField fullWidth label="Company" margin="normal" variant="outlined" />
          <TextField fullWidth label="Role" margin="normal" variant="outlined" />

          <Typography variant="h6" sx={{ mt: 3, mb: 2, color: '#E67E22' }}>
            02. What Can We Help You With?
          </Typography>
          <TextField fullWidth label="Subject" margin="normal" variant="outlined" />
          <TextField fullWidth label="Project Budget" margin="normal" variant="outlined" />

          <Typography variant="h6" sx={{ mt: 3, mb: 2, color: '#E67E22' }}>
            03. Tell Us About Your Project
          </Typography>
          <TextField
            fullWidth
            label="Project Description"
            multiline
            rows={4}
            margin="normal"
            variant="outlined"
          />
        

          <Button variant="contained" color="primary" sx={{ mt: 3 }}>
            Submit Now
          </Button>
        </Grid>

        {/* Contact Information / Support Request */}
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 1 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Support Request
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Our experts are ready to answer your questions.
            </Typography>
            <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
              Get Support
            </Button>
          </Box>

          <Box sx={{ mt: 3, p: 2, border: '1px solid #ccc', borderRadius: 1 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Need Help?
            </Typography>
            <Typography variant="body2" color="textSecondary">
              For technical questions or billing questions, please contact Customer Care.
            </Typography>
            <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
              Help Center
            </Button>
          </Box>

          <Box sx={{ mt: 3, p: 2, border: '1px solid #ccc', borderRadius: 1 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Need More Info?
            </Typography>
            <Typography variant="body2" color="textSecondary">
              For technical questions or billing questions, please contact Customer Care.
            </Typography>
            <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
              Legality Guide
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Address Section */}
      <Box sx={{ mt: 4, mb: 5, textAlign: 'center' }}>
        <Typography variant="h6">Our Locations</Typography>
        <Grid container spacing={2} justifyContent="center">
          {/* Myanmar Location */}
          <Grid item xs={12} > {/* Make Grid item full width on all screen sizes */}
            <LocationOnIcon color="primary" />
            <Typography variant="subtitle1">Myanmar</Typography>
            <Typography variant="body2">Room No.216, Shop House No.1, Times City Complex, Kamayut Township, Yangon.</Typography>
            <PhoneIcon color="primary" /><Typography variant="body2">+07 0 000 00 05</Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.946626382833!2d96.1489568!3d16.8075354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d4c60c0c87423%3A0x4a3cb7d3451fb442!2sTime%20City!5e0!3m2!1sen!2sus!4v1740732316197!5m2!1sen!2sus"
              style={mapStyle}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Myanmar Map"
            ></iframe>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactUs;
