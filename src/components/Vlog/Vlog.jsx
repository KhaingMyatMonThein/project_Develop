import React from 'react';
import { 
  Typography, 
  Container, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  Link
} from '@mui/material';
import { styled } from '@mui/system';

// Styled Button
const EventButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#ff9800",
  color: "white",
  '&:hover': {
    backgroundColor: "#e68900",
  },
  padding: theme.spacing(1, 4),
  fontSize: '1.2rem',
}));

const Vlog = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh',marginTop: "70px" }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(service-white.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'orange',
          textAlign: 'center',
          paddingX: { xs: 3, md: 6 }, 
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          Vlog
        </Typography>
        <Typography variant="body1">
          Emerging technologies such as artificial intelligence, blockchain, and
          the IoT are transforming the business.
        </Typography>
      </Box>

      {/* Past Projects Gallery */}
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'orange', fontSize: '2.5rem', textAlign: 'center' }}>
          Our Latest AI Projects
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {/* Example Project */}
          <Grid item xs={6} sm={4} md={3}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fff', borderRadius: 2, boxShadow: '0px 0px 5px rgba(0,0,0,0.05)' }}>
              <CardMedia
                component="img"
                height="140"
                image="/ai-power.jpg"
                alt="Project 1"
              />
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Typography variant="subtitle1" sx={{ fontSize: '1.3rem' }}>AI-Powered Chatbot</Typography>
                <Typography variant="caption" display="block" sx={{ fontSize: '1rem' }}>
                  Developed for customer service automation using NLP.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Add more projects here */}
          <Grid item xs={6} sm={4} md={3}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fff', borderRadius: 2, boxShadow: '0px 0px 5px rgba(0,0,0,0.05)' }}>
              <CardMedia
                component="img"
                height="140"
                image="/Predictive-Analytics.png"
                alt="Project 2"
              />
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Typography variant="subtitle1" sx={{ fontSize: '1.3rem' }}>Predictive Analytics Tool</Typography>
                <Typography variant="caption" display="block" sx={{ fontSize: '1rem' }}>
                  Built for market trend analysis using machine learning algorithms.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Past Events Gallery */}
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'orange', fontSize: '2.5rem', textAlign: 'center' }}>
          Past Events Gallery
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {/* Example Past Event */}
          <Grid item xs={6} sm={4} md={3}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fff', borderRadius: 2, boxShadow: '0px 0px 5px rgba(0,0,0,0.05)' }}>
              <CardMedia
                component="img"
                height="140"
                image="/ai-submit.png"
                alt="Past Event 1"
              />
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Typography variant="subtitle1" sx={{ fontSize: '1.3rem' }}>AI Summit 2023</Typography>
                <Typography variant="caption" display="block" sx={{ fontSize: '1rem' }}>
                  Exploring AI in Healthcare
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Add more past events here */}
          <Grid item xs={6} sm={4} md={3}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fff', borderRadius: 2, boxShadow: '0px 0px 5px rgba(0,0,0,0.05)' }}>
              <CardMedia
                component="img"
                height="140"
                image="/AI-Tech.jpg"
                alt="Past Event 2"
              />
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Typography variant="subtitle1" sx={{ fontSize: '1.3rem' }}>AI Tech Conference</Typography>
                <Typography variant="caption" display="block" sx={{ fontSize: '1rem' }}>
                  AI in Finance and Banking
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Upcoming Events Section */}
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'orange', fontSize: '2.5rem', textAlign: 'center' }}>
          Upcoming Events
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {/* Example Upcoming Event */}
          <Grid item xs={6} sm={4} md={3}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fff', borderRadius: 2, boxShadow: '0px 0px 5px rgba(0,0,0,0.05)' }}>
              <CardMedia
                component="img"
                height="140"
                image="/innovation.png"
                alt="Upcoming Event 1"
              />
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Typography variant="subtitle1" sx={{ fontSize: '1.3rem' }}>AI Innovation Summit</Typography>
                <Typography variant="caption" display="block" sx={{ fontSize: '1rem' }}>
                  Exploring AI in Education
                </Typography>
                <EventButton variant="contained">Register Now</EventButton>
              </CardContent>
            </Card>
          </Grid>
          {/* Add more upcoming events here */}
          <Grid item xs={6} sm={4} md={3}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fff', borderRadius: 2, boxShadow: '0px 0px 5px rgba(0,0,0,0.05)' }}>
              <CardMedia
                component="img"
                height="140"
                image="/AI-Tech-expo.jpg"
                alt="Upcoming Event 2"
              />
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Typography variant="subtitle1" sx={{ fontSize: '1.3rem' }}>AI Tech Expo</Typography>
                <Typography variant="caption" display="block" sx={{ fontSize: '1rem' }}>
                  Showcasing AI in Industry
                </Typography>
                <EventButton variant="contained">Register Now</EventButton>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action */}
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'orange', fontSize: '2.5rem', textAlign: 'center' }}>
          Stay Updated
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '800px', mx: 'auto', fontSize: '1.2rem' }}>
          Join our community to stay informed about upcoming events and AI innovations.
        </Typography>
        <Link href="/subscribe" underline="none">
          <EventButton variant="contained">Subscribe Now</EventButton>
        </Link>
      </Container>
    </Box>
  )
}

export default Vlog;
