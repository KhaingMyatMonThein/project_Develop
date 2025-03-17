import React from "react";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const PricingPlans = () => {
  const plans = [
    {
      title: "PLUS",
      description: "For Independent Workers",
      price: "$9",
      storage: "2TB (2000 GB), 1 User",
      users: "1 User",
      features: [
        "Implementing measures encryption.",
        "Optimizing the website's content.",
        "Helps understand past performance.",
        "Network and security management.",
        "Creating layouts and designs.",
        "Websites and mobile applications.",
      ],
      disabledFeatures: ["Creating layouts and designs.", "Websites and mobile applications."],
    },
    {
      title: "PRO",
      description: "For People",
      price: "$99",
      storage: "4TB (4000 GB), 4 User",
      users: "4 User",
      features: [
        "Implementing measures encryption.",
        "Optimizing the website's content.",
        "Helps understand past performance.",
        "Network and security management.",
        "Creating layouts and designs.",
        "Websites and mobile applications.",
      ],
      disabledFeatures: ["Websites and mobile applications."],
    },
    {
      title: "GOLD",
      description: "Startup",
      price: "$299",
      storage: "All the necessary space, Unlimited",
      users: "Unlimited Users",
      features: [
        "Implementing measures encryption.",
        "Optimizing the website's content.",
        "Helps understand past performance.",
        "Network and security management.",
        "Creating layouts and designs.",
        "Websites and mobile applications.",
      ],
      disabledFeatures: [],
    },
  ];

  const GetStartedButton = styled(Button)(({ theme }) => ({
    backgroundColor: "transparent",
    color: "black",
    border: "1px solid #ddd",
    borderRadius: theme.spacing(5),
    padding: theme.spacing(1, 3),
    marginTop: theme.spacing(2),
    "&:hover": {
      backgroundColor: "#f0f0f0",
    },
  }));

  const PlanCard = styled(Box)(({ theme }) => ({
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(3),
    textAlign: "center",
    width: "250px",
    margin: theme.spacing(2),
    boxShadow: "0px 4px 8px rgba(252, 169, 14, 0.1)",
  }));


  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap", // Prevent wrapping to the next line
        padding: 3,
        width: "100%", // Ensure it fits within its parent container
        overflowX: "auto",  
      }}
    >
      {plans.map((plan) => (
        <PlanCard key={plan.title}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {plan.title}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "text.secondary", mb: 1 }}>
            {plan.description}
          </Typography>
          <Typography variant="h5" sx={{ mb: 1 }}>
            {plan.price} <Typography variant="caption">Per Month</Typography>
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {plan.storage}, {plan.users}
          </Typography>

          <GetStartedButton variant="outlined" to="/ContactUs">Get Started</GetStartedButton>

          <List>
            {plan.features.map((feature, index) => {
              const isDisabled = plan.disabledFeatures.includes(feature);
              return (
                <ListItem key={index} disableGutters sx={{ padding: "4px 0" }}>
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <CheckCircle color={isDisabled ? "disabled" : "success"} />
                  </ListItemIcon>
                  <ListItemText
                    primary={feature}
                    primaryTypographyProps={{
                      style: { textDecoration: isDisabled ? "line-through" : "none", color: isDisabled ? "grey" : "inherit" },
                    }}
                  />
                </ListItem>
              );
            })}
          </List>
        </PlanCard>
      ))}
    </Box>
  );
};

export default PricingPlans;
