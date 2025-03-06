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
        <ServiceButton variant="outlined" color="inherit" sx={{ color: 'white', borderColor: 'orange' }}>
          Get In Touch
        </ServiceButton>
      </Box>

     
       
    

    </Box>
  );
};

export default Vlog;
