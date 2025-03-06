import React, { useState } from 'react';
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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircle from '@mui/icons-material/AccountCircle';
import BuildIcon from '@mui/icons-material/Build';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import VideocamIcon from '@mui/icons-material/Videocam';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Link, useNavigate } from 'react-router-dom';
import { Login } from '@mui/icons-material';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, link: '/' },
    { text: 'Services', icon: <BuildIcon />, link: '/services' },
    { text: 'Solutions', icon: <LightbulbIcon />, link: '/solutions' },
    { text: 'Vlog', icon: <VideocamIcon />, link: '/vlog' },
    { text: 'Reviews', icon: <RateReviewIcon />, link: '/reviews' },
    { text: 'Contact Us', icon: <ContactMailIcon />, link: '/contactus' },
  ];

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleLoginModalOpen = () => setLoginModalOpen(true);
  const handleLoginModalClose = () => setLoginModalOpen(false);

  const handleLogin = () => {
    navigate("/Login");
    handleLoginModalClose();
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#fff', color: 'black', zIndex: 1300 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component={Link}  // Use Link here
            to="/"             // Link to the home page
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: '#ff9800',
              textDecoration: 'none', // Remove underline from link
            }}
          >
            AI Solution
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <List>
                    {menuItems.map((item) => (
                      <ListItem button key={item.text} component={Link} to={item.link}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" color="inherit" onClick={handleLoginModalOpen}>
                  <AccountCircle />
                </IconButton>
              </Box>
            </>
          ) : (
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={Link} // Use Link here
                  to={item.link}    // Set the link
                  sx={{ my: 2, color: 'black', display: 'block', textTransform: 'capitalize' }} 
                >
                  {item.text}
                </Button>
              ))}
              <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" color="inherit" onClick={handleLoginModalOpen}>
                <AccountCircle />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </Container>

      {/* Login Modal */}
      <Modal
        open={loginModalOpen}
        onClose={handleLoginModalClose}
        aria-labelledby="login-modal-title"
        aria-describedby="login-modal-description"
      >
        <Box sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 300,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: "8px",
        }}>
          <Typography id="login-modal-title" variant="h6" component="h2">
            Login Required
          </Typography>
          <Typography id="login-modal-description" sx={{ mt: 2 }}>
            Please log in to access your account.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handleLogin}
          >
          Login
          </Button>
        </Box>
      </Modal>
    </AppBar>
  );
};

export default Navbar;
