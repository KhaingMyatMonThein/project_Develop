import React from 'react';
import {
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  Link
} from '@mui/material';
import { styled } from '@mui/system';

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

  const projectData = [
    {
      title: 'AI-Powered Chatbot',
      description: 'Developed for customer service automation using NLP.',
      image: '/ai-power.jpg',
    },
    {
      title: 'Predictive Analytics Tool',
      description: 'Built for market trend analysis using machine learning algorithms.',
      image: '/Predictive-Analytics.png',
    },
  ];

  const eventData = [
    {
      title: 'AI Summit 2023',
      description: 'Exploring AI in Healthcare',
      image: '/ai-submit.png',
    },
    {
      title: 'AI Tech Conference',
      description: 'AI in Finance and Banking',
      image: '/AI-Tech.jpg',
    },
  ];

  const upcomingEventData = [
    {
      title: 'AI Innovation Summit',
      description: 'Exploring AI in Education',
      image: '/innovation.png',
      callToAction: 'Register Now',
    },
    {
      title: 'AI Tech Expo',
      description: 'Showcasing AI in Industry',
      image: '/AI-Tech-expo.jpg',
      callToAction: 'Register Now',
    },
  ];

  const renderSection = (title, data, type = 'project') => {
    return (
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'orange', fontSize: '2.5rem', textAlign: 'center' }}>
          {title}
        </Typography>
        {data.map((item, index) => (
          <Card
            key={index}
            sx={{
              mb: 3, // Margin bottom for spacing between cards
              backgroundColor: '#fff',
              borderRadius: 2,
              boxShadow: '0px 0px 5px rgba(0,0,0,0.05)',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', alignItems: 'center' }}>
              <CardMedia
                component="img"
                sx={{ width: '50%', height: 'auto' }}
                image={item.image}
                alt={item.title}
              />
              <CardContent sx={{ textAlign: 'center', p: 3, width: '50%' }}>
                <Typography variant="subtitle1" sx={{ fontSize: '1.3rem' }}>{item.title}</Typography>
                <Typography variant="caption" display="block" sx={{ fontSize: '1rem' }}>
                  {item.description}
                </Typography>
                {type === 'upcoming' && (
                  <EventButton variant="contained">{item.callToAction}</EventButton>
                )}
              </CardContent>
            </Box>
          </Card>
        ))}
      </Container>
    );
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', marginTop: "70px" }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(service-white.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "orange",
          textAlign: "center",
          paddingX: { xs: 3, md: 6 },
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          Blog
        </Typography>
        <Typography variant="body1">
          Emerging technologies such as artificial intelligence, blockchain, and
          the IoT are transforming the business.
        </Typography>
      </Box>

      {/* Render Sections */}
      {renderSection("Our Latest AI Projects", projectData)}
      {renderSection("Past Events Gallery", eventData)}
      {renderSection("Upcoming Events", upcomingEventData, 'upcoming')}

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
  );
};

export default Vlog;
