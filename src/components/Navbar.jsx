import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Container,
  useMediaQuery,
  useTheme,
  Modal,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircle from "@mui/icons-material/AccountCircle";
import BuildIcon from "@mui/icons-material/Build";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import VideocamIcon from "@mui/icons-material/Videocam";
import RateReviewIcon from "@mui/icons-material/RateReview";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, link: "/" },
    { text: "Services", icon: <BuildIcon />, link: "/services" },
    { text: "About Us", icon: <LightbulbIcon />, link: "/aboutus" },
    { text: "Blog", icon: <VideocamIcon />, link: "/vlog" },
    { text: "Reviews", icon: <RateReviewIcon />, link: "/reviews" },
    { text: "Contact Us", icon: <ContactMailIcon />, link: "/contactus" },
  ];

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const handleLoginModalOpen = () => setLoginModalOpen(true);
  const handleLoginModalClose = () => setLoginModalOpen(false);

  const handleLogin = () => {
    navigate("/admin/LoginPage");
    handleLoginModalClose();
  };

  return (
    <>
      {/* Navbar */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#fff",
          color: "black",
          zIndex: 1300,
          height: 80,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                ml: 0,
                fontWeight: 700,
                color: "#e68900",
                textDecoration: "none",
                fontSize: 20,
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={"roboticon.jpg"}
                alt="Robot Icon"
                style={{ width: 60, height: 60, marginRight: 10 }}
              />
              AI Solution
            </Typography>

            {/* Mobile View */}
            {isMobile ? (
              <>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => toggleDrawer(true)}
                  >
                    <MenuIcon />
                  </IconButton>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={handleLoginModalOpen}
                  >
                    <AccountCircle />
                  </IconButton>
                </Box>
                {/* Drawer */}
                <Drawer open={drawerOpen} onClose={() => toggleDrawer(false)}>
                  <Box
                    sx={{
                      width: 250,
                      marginTop: "80px",
                    }}
                    role="presentation"
                    onClick={() => toggleDrawer(false)}
                    onKeyDown={() => toggleDrawer(false)}
                  >
                    <List>
                      {menuItems.map((item) => (
                        <ListItem
                          button
                          key={item.text}
                          component={Link}
                          to={item.link}
                          onClick={() => toggleDrawer(false)}
                          sx={{
                            backgroundColor:
                              location.pathname === item.link ? "#f0f0f0" : "",
                            "& .MuiListItemText-primary": {
                              color:
                                location.pathname === item.link
                                  ? "#e68900"
                                  : "black",
                            },
                            "&:hover": {
                              backgroundColor: "#f0f0f0",
                            },
                          }}
                        >
                          <ListItemIcon>{item.icon}</ListItemIcon>
                          <ListItemText primary={item.text} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Drawer>
              </>
            ) : (
              /* Desktop View */
              <>
                {/* Align menu items and account icon to the right */}
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                    justifyContent: "flex-end",
                  }}
                >
                  {menuItems.map((item) => (
                    <Button
                      key={item.text}
                      component={Link}
                      to={item.link}
                      sx={{
                        my: 2,
                        color:
                          location.pathname === item.link ? "#e68900" : "black",
                        display: "block",
                        textTransform: "capitalize",
                        fontWeight:
                          location.pathname === item.link ? "bold" : "normal",
                        fontSize: 18,
                      }}
                    >
                      {item.text}
                    </Button>
                  ))}
                  {/* Account Icon */}
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={handleLoginModalOpen}
                  >
                    <AccountCircle />
                  </IconButton>
                </Box>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Add padding below navbar */}
      <Box sx={{ height: "20px" }} />

      {/* Login Modal */}
      <Modal
        open={loginModalOpen}
        onClose={handleLoginModalClose}
        aria-labelledby="login-modal-title"
        aria-describedby="login-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "8px",
          }}
        >
          <Typography id="login-modal-title" variant="h6" component="h2">
            Login Required
          </Typography>
          <Typography id="login-modal-description" sx={{ mt: 2 }}>
            Please log in to access your account.
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "#e68900",
              "&hover": {
                backgroundColor: "#e68900",
              },
            }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default Navbar;
