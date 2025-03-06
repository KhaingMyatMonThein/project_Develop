import React from "react";
import {
  Typography,
  Grid,
  Box,
  Button,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsIcon from "@mui/icons-material/Settings";
import CodeIcon from "@mui/icons-material/Code";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import StorageIcon from "@mui/icons-material/Storage";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import CampaignIcon from "@mui/icons-material/Campaign";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import DescriptionIcon from "@mui/icons-material/Description";
import CybersecurityIcon from "@mui/icons-material/Lock";
import HROrganizationIcon from "@mui/icons-material/People";
import EmailIcon from "@mui/icons-material/Email";


const ServiceCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  border: "1px solid #eee",
  borderRadius: theme.spacing(1),
  textAlign: "center",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: theme.spacing(3),
  textAlign: "center",
}));

const ServiceButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#ff9800",
  color: "white",
  '&:hover': {
    backgroundColor: "#e68900", },
  marginTop: theme.spacing(3),
  borderRadius: theme.spacing(5),
  padding: theme.spacing(1, 4),
}));

const Services = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh',marginTop: "0px" }}>
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
          SERVICES
        </Typography>
        <Typography variant="body1">
          Emerging technologies such as artificial intelligence, blockchain, and
          the IoT are transforming the business.
        </Typography>
        <ServiceButton variant="outlined" color="inherit" sx={{ color: 'white', borderColor: 'orange' }}>
          Get In Touch
        </ServiceButton>
      </Box>

      {/* Our Services Section */}
      <Box sx={{ py: 4, px: { xs: 3, md: 6 } }}>
        <SectionTitle variant="h4">Our Services and Solutions</SectionTitle>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard>
              <SecurityIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6">Data Security</Typography>
              <Typography variant="body2" color="textSecondary">
                Protecting digital information from unauthorized access or
                corruption.
              </Typography>
            </ServiceCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard>
              <SpeedIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6">SEO and Optimization</Typography>
              <Typography variant="body2" color="textSecondary">
                Improving the quality of traffic to a website from search
                engines.
              </Typography>
            </ServiceCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard>
              <AnalyticsIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6">Analytics and Research</Typography>
              <Typography variant="body2" color="textSecondary">
                Analytics and research are critical components of any business
                strategy.
              </Typography>
            </ServiceCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard>
              <SettingsIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6">IT Management Services</Typography>
              <Typography variant="body2" color="textSecondary">
                Accelerate Innovation with world class tech teams our all
                service.
              </Typography>
            </ServiceCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard>
              <CodeIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6">Web Development</Typography>
              <Typography variant="body2" color="textSecondary">
                Development is the process of creating and maintaining websites.
              </Typography>
            </ServiceCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard>
              <PhoneAndroidIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6">Mobile Applications</Typography>
              <Typography variant="body2" color="textSecondary">
                Creating user-friendly interfaces for digital products.
              </Typography>
            </ServiceCard>
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <ServiceButton variant="outlined" color="primary">
            Talk To Experts
          </ServiceButton>
          <ServiceButton variant="contained" color="primary">
            Pricing Plans
          </ServiceButton>
        </Box>
      </Box>

      {/* Digital Opportunity Section */}
      <Box
        sx={{
          py: 10,
          textAlign: "left",
          backgroundImage: "url(services-banner.jpg)",
          backgroundSize: "cover",
          color: "white",
          paddingX: { xs: 3, md: 6 },
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          Let's Discuss Your Digital Opportunity.
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Unlock your digital transformation opportunities now.
        </Typography>
        <ServiceButton variant="contained" >
          Get Started
        </ServiceButton>
      </Box>

      {/* Ready To Take The Next Step? */}
      <Box sx={{ py: 4, px: { xs: 3, md: 6 } }}>
        <SectionTitle variant="h4">Ready To Take The Next Step?</SectionTitle>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <ServiceCard>
              <Typography variant="h6">Get a Live Demo</Typography>
              <Typography variant="body2" color="textSecondary">
                Our platform is tailor-made for developers, providing a powerful
                and easy-to-use solution. With our tools, you can streamline
                your development process.
              </Typography>
              <ServiceButton variant="outlined" color="primary">
                Request A Free Demo
              </ServiceButton>
            </ServiceCard>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ServiceCard>
              <Typography variant="h6">Start Now</Typography>
              <Typography variant="body2" color="textSecondary">
                Cloud-based solutions have allowed employees to shift their
                operations to remote, allowing employees to work with an
                internet connection.
              </Typography>
              <ServiceButton variant="outlined" color="primary">
                Get In Touch
              </ServiceButton>
            </ServiceCard>
          </Grid>
        </Grid>
      </Box>

      {/* Types Of SaaS Applications We Deliver */}
      <Box
        sx={{
          py: 2,
          backgroundColor: "#2c3e50",
          color: "white",
          px: { xs: 3, md: 6 },
        }}
      >
        <SectionTitle variant="h4" sx={{ color: "white" }}>
          Types Of SaaS Applications We Deliver
        </SectionTitle>
        <Typography
          variant="body1"
          color="inherit"
          sx={{ textAlign: "center", mb: 3 }}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6} sm={4} md={3}>
            <ServiceCard sx={{ backgroundColor: "#34495e", color: "white" }}>
              <StorageIcon sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6">CRMs Platforms</Typography>
            </ServiceCard>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <ServiceCard sx={{ backgroundColor: "#34495e", color: "white" }}>
              <InsertChartIcon sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6">ERPs Platforms</Typography>
            </ServiceCard>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <ServiceCard sx={{ backgroundColor: "#34495e", color: "white" }}>
              <CampaignIcon sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6">Marketing Software</Typography>
            </ServiceCard>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <ServiceCard sx={{ backgroundColor: "#34495e", color: "white" }}>
              <AssignmentIcon sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6">Project Management </Typography>
            </ServiceCard>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <ServiceCard sx={{ backgroundColor: "#34495e", color: "white" }}>
              <AccountBalanceIcon sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6">Accounting Systems</Typography>
            </ServiceCard>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <ServiceCard sx={{ backgroundColor: "#34495e", color: "white" }}>
              <DescriptionIcon sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6">Document Solutions</Typography>
            </ServiceCard>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <ServiceCard sx={{ backgroundColor: "#34495e", color: "white" }}>
              <CybersecurityIcon sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6">Cybersecurity Platforms</Typography>
            </ServiceCard>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <ServiceCard sx={{ backgroundColor: "#34495e", color: "white" }}>
              <HROrganizationIcon sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6">HR/HRM Software</Typography>
            </ServiceCard>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <ServiceButton variant="outlined" color="inherit" sx={{ color: "white", borderColor: "white" }}>
            Talk To Experts
          </ServiceButton>
        </Box>
      </Box>

      {/* Join The ITSulu Experience */}
      <Box sx={{ py: 4, textAlign: "center" }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Join The IT Solution Experience
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Duis autem vel eum iriure dolor in hendrerit in vulputate.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <TextField label="Your email address" variant="outlined" sx={{ mr: 1 }} />
          <ServiceButton variant="contained"  sx={{  mt: '0' }}>
            Subscribe Now
          </ServiceButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
