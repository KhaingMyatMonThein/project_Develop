
import React from 'react';
import Sidebar from './Sidebar';
import { Box } from '@mui/material';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout" style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <Box
        className="admin-content"
        sx={{
          flexGrow: 1,
          p: 3,
          bgcolor: '#fff', 
          color: '#333',  
        }}
      >
        {children}
      </Box>
    </div>
  );
};

export default AdminLayout;
