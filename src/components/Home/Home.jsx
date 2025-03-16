import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(/AI.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '600px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          marginTop: '50px',
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

      {/* Technological Applications Section */}
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#333' }}>
          Our Services and Solutions
        </Typography>
        <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 3, color: '#333' }}>
          Technological Applications
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {/* Data Security Card */}
          <Grid item xs={12} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Data Security
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Protecting digital information from unauthorized access or corruption.
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <ul>
                    <li>Implement measures encryption.</li>
                    <li>Firewalls to safeguard sensitive data.</li>
                    <li>Implementing security measures.</li>
                    <li>Developing response plans.</li>
                  </ul>
                </Box>
                <Button component={Link} to="/data-security" size="small" sx={{ mt: 2, color: 'orange' }}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* SEO and Optimization Card */}
          <Grid item xs={12} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                  SEO and Optimization
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Improving the quality of traffic to a website from search engines.
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <ul>
                    <li>Optimizing the website's content.</li>
                    <li>Optimizing keyword research.</li>
                    <li>Meta tag optimization and links.</li>
                    <li>User-friendly, mobile-responsive.</li>
                  </ul>
                </Box>
                <Button component={Link} to="/seo" size="small" sx={{ mt: 2, color: 'orange' }}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Analytics and Research Card */}
          <Grid item xs={12} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Analytics and Research
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Analytics and research are critical components of any business strategy.
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <ul>
                    <li>Helps understand performance.</li>
                    <li>Research to anticipate trends.</li>
                    <li>Insights into consumer behavior.</li>
                    <li>Investing in analytics & research.</li>
                  </ul>
                </Box>
                <Button component={Link} to="/analytics" size="small" sx={{ mt: 2, color: 'orange' }}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
            {/* IT Solutions Card */}
            <Grid item xs={12} md={3}>
                <Card sx={{ height: '100%' }}>
                <CardContent>
                    <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                    IT Solutions
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Accelerate innovation with the right tech teams on demand.
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                    <ul>
                        <li>Network.</li>
                        <li>Infrastructure.</li>
                        <li>Software.</li>
                        <li>Technical.</li>
                    </ul>
                    </Box>
                    <Button component={Link} to="/it-solution" size="small" sx={{ mt: 2, color: 'orange' }}>
                    Learn More
                    </Button>
                </CardContent>
                </Card>
            </Grid>
        </Grid>
      </Box>

      {/* Powerful and Easy Section */}
       <Box sx={{ py: 4, textAlign: 'left', bgcolor: '#f9f9f9', padding: '20px' }}>
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={6}>
                <img
                    src="/disscussion.jpg" // Replace with your image path
                    alt="Powerful and Easy"
                    style={{ width: '100%', borderRadius: '8px' }}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 2, color: '#333' }}>
                    Powerful and Easy
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    Our platform is tailor-made for developers, providing a powerful and easy-to-use solution. With our tools, you can streamline your development process and achieve better outcomes. We offer a range of features that enable you to create robust applications quickly and efficiently.
                </Typography>
                <Box>
                    <ul>
                    <li>Our platform places emphasis on user experience.</li>
                    <li>Building a website, mobile app or software.</li>
                    <li>Our platform is designed to help you.</li>
                    <li>Achieve your goals and exceed expectations.</li>
                    </ul>
                </Box>
                </Grid>
            </Grid>
        </Box>

      {/* Latest Thinking Section */}
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#333' }}>
          Our Latest News
        </Typography>
        <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 3, color: '#333' }}>
          Latest Thinking
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {/* News Card 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image="/home1.jpg" // Replace with your image path
                alt="News 1"
              />
              <CardContent>
                <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Build Your Money Machine, Take Control
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  There are many variations of passages of Lorem Ipsum available.
                </Typography>
                <Button component={Link} to="/news1" size="small" sx={{ mt: 2, color: 'orange' }}>
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* News Card 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image="/home2.jpg" // Replace with your image path
                alt="News 2"
              />
              <CardContent>
                <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Positioning Your Self As a Pro Consultant
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  There are many variations of passages of Lorem Ipsum available.
                </Typography>
                <Button component={Link} to="/news2" size="small" sx={{ mt: 2, color: 'orange' }}>
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* News Card 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image="/home3.png" // Replace with your image path
                alt="News 3"
              />
              <CardContent>
                <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                  The Latest Technology Have Suffered Alteration
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  There are many variations of passages of Lorem Ipsum available.
                </Typography>
                <Button component={Link} to="/news3" size="small" sx={{ mt: 2, color: 'orange' }}>
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

       {/* Our Awards and Recognitions Section */}
        <Box sx={{ py: 4, textAlign: 'center', bgcolor: '#f9f9f9' }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#333' }}>
            Hard Work
            </Typography>
            <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 4, color: '#333' }}>
            Our Awards and Recognitions
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
            Awarded for its contributions to the field of AI, including being named one of MIT Technology Review's 50 Smartest Companies and winning the Association for Computing Machinery.
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {/* CSS Design Award */}
                <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ p: 3, bgcolor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                    CSS Design
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Recognizes exceptional websites with outstanding visual appeal and technical functionality.
                    </Typography>
                </Box>
                </Grid>

                {/* W3 Design Award */}
                <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ p: 3, bgcolor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                    W3 Design Award
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Considers aspects such as user experience, visual aesthetics, and technical prowess. Based on specific criteria.
                    </Typography>
                </Box>
                </Grid>

                {/* The FWA Award */}
                <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ p: 3, bgcolor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                    The FWA Award
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    The best in digital creativity and innovation. Internationally accolade, showcasing excellence in design.
                    </Typography>
                </Box>
                </Grid>

                {/* WWW Awards */}
                <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ p: 3, bgcolor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                    WWW Awards
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Excellence in web design, content creation, and user experience. Based on specific criteria such as creativity.
                    </Typography>
                </Box>
                </Grid>
            </Grid>
            <Button component={Link} to="/aboutus" variant="outlined" sx={{ mt: 3, color: 'black' }}>
                About us
            </Button>
        </Box>
    </Box>
  );
};

export default Home;
