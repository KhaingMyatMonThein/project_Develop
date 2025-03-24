// src/admin/DashboardPage.jsx
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Select,
  MenuItem,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  styled,
} from '@mui/material';
import { Edit, Send } from '@mui/icons-material';

// Styled Components for a Modern Look
const StyledTableContainer = styled(TableContainer)({
  boxShadow: '0px 3px 5px rgba(0,0,0,0.1)',
  borderRadius: '8px',
});

const StyledTableCell = styled(TableCell)({
  fontWeight: 'bold',
  backgroundColor: '#f9f9f9',
});

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
}));

const initialInquiries = [
  {
    id: 1,
    date: 'April 29, 2024',
    customerName: 'Anna M. Hines',
    emailId: 'anna.hines@mail.com',
    phoneNo: '(+1)-555-1564-261',
    company:'ABC Company',
    address: 'Burr Ridge/Illinois',
    subject:'Project Inquiry',
    projectDescription:'Need help with building a new website',
    status: 'Completed',
  },
  {
    id: 2,
    date: 'April 25, 2024',
    customerName: 'Judith H. Fritsche',
    emailId: 'judith.fritsche@mail.com',
    phoneNo: '(+57)-305-5579-759',
    company:'XYZ Corporation',
     subject:'Software Development',
    projectDescription:'Looking to develop a mobile app',
    address: 'SULLIVAN/Kentucky',
    status: 'Pending',
  },
  {
    id: 3,
    date: 'April 25, 2024',
    customerName: 'Peter T. Smith',
    emailId: 'peter.smith@mail.com',
    phoneNo: '(+33)-655-5187-93',
     subject:'SEO Services',
     company:'123 Enterprises',
     projectDescription:'Need SEO optimization for the existing website',
    address: 'Yreka/California',
    status: 'Work in Progress',
  },
];

const DashboardPage = () => {
  const [inquiries, setInquiries] = useState(initialInquiries);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleStatusChange = (id, newStatus) => {
    setInquiries((prevInquiries) =>
      prevInquiries.map((inquiry) =>
        inquiry.id === id ? { ...inquiry, status: newStatus } : inquiry
      )
    );
  };

  const handleOpenDialog = (inquiry) => {
    setSelectedInquiry(inquiry);
    setOpenDialog(true);
    setReplyText(''); // Clear previous reply
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSendEmail = () => {
    // In a real application, you would send the email here.
    console.log(`Sending email to ${selectedInquiry.emailId} with message: ${replyText}`);
    handleCloseDialog();
  };

  return (
    <Container>
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom style={{ color: '#E67E22' }}>
          Email Inquiries
        </Typography>
        <StyledTableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="email inquiries table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell>Customer Name</StyledTableCell>
                <StyledTableCell>Email ID</StyledTableCell>
                <StyledTableCell>Phone No</StyledTableCell>
                <StyledTableCell>Company</StyledTableCell>
                <StyledTableCell>Subject</StyledTableCell>
                <StyledTableCell>Address</StyledTableCell>
                <StyledTableCell>Project Description</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {inquiries.map((inquiry) => (
                <StyledTableRow key={inquiry.id}>
                  <TableCell>{inquiry.date}</TableCell>
                  <TableCell>{inquiry.customerName}</TableCell>
                  <TableCell>{inquiry.emailId}</TableCell>
                  <TableCell>{inquiry.phoneNo}</TableCell>
                  <TableCell>{inquiry.company}</TableCell>
                  <TableCell>{inquiry.subject}</TableCell>
                  <TableCell>{inquiry.address}</TableCell>
                   <TableCell>{inquiry.projectDescription}</TableCell>
                  <TableCell>
                    <Select
                      value={inquiry.status}
                      onChange={(e) => handleStatusChange(inquiry.id, e.target.value)}
                      variant="outlined"
                      size="small"
                      style={{ minWidth: '120px' }}  // Adjust width as needed
                    >
                      <MenuItem value="Pending">Pending</MenuItem>
                      <MenuItem value="Work in Progress">Work in Progress</MenuItem>
                      <MenuItem value="Completed">Completed</MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="send email"
                      onClick={() => handleOpenDialog(inquiry)}
                      style={{ color: '#E67E22' }}
                    >
                      <Send />
                    </IconButton>
                  </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>
      </Box>

      {/* Email Reply Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="md">
        <DialogTitle style={{ backgroundColor: '#E67E22', color: 'white' }}>
          Reply to {selectedInquiry?.emailId}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="reply"
            label="Reply Message"
            type="text"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
        </DialogContent>
        <DialogActions style={{ backgroundColor: '#f9f9f9' }}>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSendEmail} style={{ color: '#E67E22' }}>
            Send Email
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default DashboardPage;
