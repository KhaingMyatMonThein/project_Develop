import React, { useState, useEffect } from 'react';
import { 
  Typography, 
  Container, 
  Box, 
  Button, 
  Grid, 
  Avatar, 
  Card, 
  CardContent, 
  Paper
} from '@mui/material';
import { styled } from '@mui/system';
import PeopleIcon from '@mui/icons-material/People'; // Example icon
import LightbulbIcon from '@mui/icons-material/Lightbulb'; // Example icon
import ThumbUpIcon from '@mui/icons-material/ThumbUp'; // Example icon

// Styled Button
const ServiceButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#ff9800",
  color: "white",
  '&:hover': {
    backgroundColor: "#e68900",
  },
  marginTop: theme.spacing(3),
  borderRadius: theme.spacing(5),
  padding: theme.spacing(1, 4),
  fontSize: '1.2rem',
}));

const AboutUs = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 500); // Delay animation by 500ms
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f7f7f7' }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(service-white.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '400px',
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
          About Us
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '600px', mx: 'auto', fontSize: '1.2rem'}}>
          We are a team of passionate AI experts dedicated to transforming businesses through innovative and intelligent solutions.  Our mission is to empower organizations to achieve their goals by leveraging the power of artificial intelligence.
        </Typography>
        <ServiceButton variant="contained">Learn More</ServiceButton>
      </Box>

      {/* Our Story Section */}
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'orange', fontSize: '2.5rem', textAlign: 'center' }}>
          Our Story
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '800px', mx: 'auto', fontSize: '1.2rem' }}>
          Founded in [2025], AI Solution Company was born from a shared vision of creating a world where AI is accessible and beneficial to all. We started as a small group of researchers and engineers with a deep passion for AI. Over the years, we've grown into a leading AI solutions provider, partnering with businesses across various industries to solve their most pressing challenges.
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '800px', mx: 'auto', fontSize: '1.2rem' }}>
          We believe in a collaborative approach, working closely with our clients to understand their unique needs and develop tailored AI solutions that deliver measurable results.
        </Typography>
      </Container>

      {/* Our Values Section */}
      <Box sx={{ my: 4, backgroundColor: '#f0f0f0', padding: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'orange', fontSize: '2.5rem', textAlign: 'center' }}>
          Our Values
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Card sx={{
              height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fff', borderRadius: 2, boxShadow: '0px 0px 5px rgba(0,0,0,0.05)',
            }}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <PeopleIcon sx={{ fontSize: 50, color: 'orange', mb: 1 }} />
                <Typography variant="h6" gutterBottom sx={{ fontSize: '1.5rem' }}>
                  Collaboration
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '1.2rem' }}>
                  We believe in the power of teamwork and collaboration, both internally and with our clients.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{
              height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fff', borderRadius: 2, boxShadow: '0px 0px 5px rgba(0,0,0,0.05)',
            }}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <LightbulbIcon sx={{ fontSize: 50, color: 'orange', mb: 1 }} />
                <Typography variant="h6" gutterBottom sx={{ fontSize: '1.5rem' }}>
                  Innovation
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '1.2rem' }}>
                  We are committed to pushing the boundaries of AI and developing cutting-edge solutions.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{
              height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fff', borderRadius: 2, boxShadow: '0px 0px 5px rgba(0,0,0,0.05)',
            }}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <ThumbUpIcon sx={{ fontSize: 50, color: 'orange', mb: 1 }} />
                <Typography variant="h6" gutterBottom sx={{ fontSize: '1.5rem' }}>
                  Integrity
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '1.2rem' }}>
                  We operate with the highest ethical standards and are committed to building trust with our clients.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Collaboration Partners Section */}
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'orange', fontSize: '2.5rem', textAlign: 'center' }}>
          Our Collaboration Partners
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {/* Example Partner */}
          <Grid item xs={6} sm={4} md={3}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fff', borderRadius: 2, boxShadow: '0px 0px 5px rgba(0,0,0,0.05)' }}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Avatar alt="Databricks" src="/static/images/partners/databricks.png" sx={{ width: 100, height: 100, mx: 'auto', mb: 1 }} />
                <Typography variant="subtitle1" sx={{ fontSize: '1.3rem' }}>Databricks</Typography>
                <Typography variant="caption" display="block" sx={{ fontSize: '1rem' }}>
                  Partnered for AI Solutions
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Add more partners here */}
          <Grid item xs={6} sm={4} md={3}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fff', borderRadius: 2, boxShadow: '0px 0px 5px rgba(0,0,0,0.05)' }}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Avatar alt="Expert.ai" src="/static/images/partners/expertai.png" sx={{ width: 100, height: 100, mx: 'auto', mb: 1 }} />
                <Typography variant="subtitle1" sx={{ fontSize: '1.3rem' }}>Expert.ai</Typography>
                <Typography variant="caption" display="block" sx={{ fontSize: '1rem' }}>
                  Partnered for NLU Solutions
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Past Achievements and Future Plans Section */}
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'orange', fontSize: '2.5rem', textAlign: 'center' }}>
          Our Journey and Future Plans
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '800px', mx: 'auto', fontSize: '1.2rem' }}>
          In the past, we have successfully developed AI-powered solutions for various industries, including healthcare and finance. Our AI models have helped clients streamline operations, enhance customer experiences, and improve decision-making processes.
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '800px', mx: 'auto', fontSize: '1.2rem' }}>
          Looking forward, we plan to expand our offerings to include more advanced AI technologies such as multimodal processing and reasoning capabilities. We aim to collaborate with leading research institutions to stay at the forefront of AI innovation and deliver cutting-edge solutions to our clients.
        </Typography>
      </Container>

      {/* Our Team Section */}
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'orange', fontSize: '2.5rem', textAlign: 'center' }}>
          Our Team
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {/* Example Team Member */}
          <Grid item xs={6} sm={4} md={3}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fff', borderRadius: 2, boxShadow: '0px 0px 5px rgba(0,0,0,0.05)' }}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Avatar alt="John Doe" src="/static/images/avatar/1.jpg" sx={{ width: 100, height: 100, mx: 'auto', mb: 1 }} />
                <Typography variant="subtitle1" sx={{ fontSize: '1.3rem' }}>John Doe</Typography>
                <Typography variant="caption" display="block" sx={{ fontSize: '1rem' }}>
                  CEO
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Add more team members here */}
          <Grid item xs={6} sm={4} md={3}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fff', borderRadius: 2, boxShadow: '0px 0px 5px rgba(0,0,0,0.05)' }}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Avatar alt="Jane Smith" src="/static/images/avatar/2.jpg" sx={{ width: 100, height: 100, mx: 'auto', mb: 1 }} />
                <Typography variant="subtitle1" sx={{ fontSize: '1.3rem' }}>Jane Smith</Typography>
                <Typography variant="caption" display="block" sx={{ fontSize: '1rem' }}>
                  CTO
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutUs;
