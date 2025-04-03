import React, { useState } from "react";
import {
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import axios from "axios";
import Layout from "../Layout";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    subject: "",
    projectBudget: "",
    projectDescription: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://localhost:7082/api/FormData",
        formData
      );
      console.log("Form submitted successfully:", response.data);
      setOpenSnackbar(true);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        role: "",
        subject: "",
        projectBudget: "",
        projectDescription: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const mapStyle = {
    width: "100%",
    height: "300px",
    border: "0",
  };

  return (
    <Layout>
      <Container
        sx={{
          mt: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ textAlign: "center", my: 4, maxWidth: "800px" }}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
            Let's Discuss Your Opportunity
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            We're here to help. Please fill out the form below and we'll get
            back to you as soon as possible.
          </Typography>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ width: "100%", maxWidth: "800px" }}
        >
          <Typography variant="h6" sx={{ mb: 2, color: "#E67E22" }}>
            Tell Us About Yourself
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Typography variant="h6" sx={{ mt: 3, mb: 2, color: "#E67E22" }}>
            What Can We Help You With?
          </Typography>
          <TextField
            fullWidth
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Project Budget"
            name="projectBudget"
            value={formData.projectBudget}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />

          <Typography variant="h6" sx={{ mt: 3, mb: 2, color: "#E67E22" }}>
            Tell Us About Your Project
          </Typography>
          <TextField
            fullWidth
            label="Project Description"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            multiline
            rows={4}
            margin="normal"
            variant="outlined"
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
          >
            Submit Now
          </Button>
        </Box>

        {/* Address Section */}
        <Box
          sx={{
            mt: 4,
            mb: 5,
            textAlign: "center",
            width: "100%",
            maxWidth: "800px",
          }}
        >
          <Typography variant="h6">Our Locations</Typography>
          <Grid container spacing={2} justifyContent="center">
            {/* Myanmar Location */}
            <Grid item xs={12}>
              <LocationOnIcon color="primary" />
              <Typography variant="subtitle1">Myanmar</Typography>
              <Typography variant="body2">
                Room No.216, Shop House No.1, Times City Complex, Kamayut
                Township, Yangon.
              </Typography>
              <PhoneIcon color="primary" />
              <Typography variant="body2">+07 0 000 00 05</Typography>
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
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert onClose={handleCloseSnackbar} severity="success">
            Form submitted successfully!
          </Alert>
        </Snackbar>
      </Container>
    </Layout>
  );
};

export default ContactUs;
