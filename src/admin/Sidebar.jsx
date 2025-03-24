// src/components/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Article as ArticleIcon,
  Email as EmailIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { List, ListItem, ListItemIcon, ListItemText, Box, styled } from '@mui/material';

// Styled Components for a Modern Look
const StyledSidebar = styled(Box)({
  width: 240,
  backgroundColor: '#E67E22', // Solid orange background
  color: '#fff',           // White text color
  height: '100vh',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
});

const StyledListItem = styled(ListItem)(({ active }) => ({
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Lighter shade on hover
  },
  backgroundColor: active ? 'rgba(255, 255, 255, 0.15)' : 'transparent', // Active item background
  paddingTop: '12px',      // Adjust spacing
  paddingBottom: '12px',
}));

const StyledListItemIcon = styled(ListItemIcon)({
  color: 'white',         // White icon color
});

const Sidebar = () => {
  const location = useLocation(); // Get the current route location

  return (
    <StyledSidebar>
      {/* Brand */}
      <Box
        sx={{
          p: 3,
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        AI Solution Admin Panel
      </Box>

      <List component="nav" aria-labelledby="nested-list-subheader">
        <StyledListItem
          button
          component={Link}
          to="/admin/dashboard"
          active={location.pathname === '/admin/dashboard'} // Check if active
        >
          <StyledListItemIcon>
            <DashboardIcon />
          </StyledListItemIcon>
          <ListItemText primary="Dashboard" />
        </StyledListItem>
        <StyledListItem
          button
          component={Link}
          to="/admin/users"
          active={location.pathname === '/admin/users'} // Check if active
        >
          <StyledListItemIcon>
            <PeopleIcon />
          </StyledListItemIcon>
          <ListItemText primary="User Management" />
        </StyledListItem>
        <StyledListItem
          button
          component={Link}
          to="/admin/blogs"
          active={location.pathname === '/admin/blogs'} // Check if active
        >
          <StyledListItemIcon>
            <ArticleIcon />
          </StyledListItemIcon>
          <ListItemText primary="Blog Management" />
        </StyledListItem>
        <StyledListItem
          button
          component={Link}
          to="/admin/settings"
          active={location.pathname === '/admin/settings'} // Check if active
        >
          <StyledListItemIcon>
            <SettingsIcon />
          </StyledListItemIcon>
          <ListItemText primary="Settings" />
        </StyledListItem>
      </List>
    </StyledSidebar>
  );
};

export default Sidebar;
