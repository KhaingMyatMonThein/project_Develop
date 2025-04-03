import React, { useState, useEffect } from "react";
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
  Snackbar,
  Alert,
} from "@mui/material";
import { Send } from "@mui/icons-material";
import axios from "axios";


const StyledTableContainer = styled(TableContainer)({
  boxShadow: "0px 3px 5px rgba(0,0,0,0.1)",
  borderRadius: "8px",
});

const StyledTableCell = styled(TableCell)({
  fontWeight: "bold",
  backgroundColor: "#f9f9f9",
});

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
}));

const DashboardPage = () => {
  const [inquiries, setInquiries] = useState([]);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [subject, setSubject] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://localhost:7082/api/FormData");

        const formattedData = response.data.map((item) => ({
          ...item,
          customerName: `${item.firstName} ${item.lastName}`,
        }));
        setInquiries(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {

      setInquiries((prevInquiries) =>
        prevInquiries.map((inquiry) =>
          inquiry.id === id ? { ...inquiry, isLoading: true } : inquiry
        )
      );

  
      await axios.put(`https://localhost:7082/api/FormData/${id}`, {
        newStatus,
      });

 
      setInquiries((prevInquiries) =>
        prevInquiries.map((inquiry) =>
          inquiry.id === id
            ? { ...inquiry, status: newStatus, isLoading: false }
            : inquiry
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status. Please try again.");

   
      setInquiries((prevInquiries) =>
        prevInquiries.map((inquiry) =>
          inquiry.id === id ? { ...inquiry, isLoading: false } : inquiry
        )
      );
    }
  };

  const handleOpenDialog = (inquiry) => {
    setSelectedInquiry(inquiry);
    setOpenDialog(true);
    setReplyText("");
    setSubject(`Reply to your inquiry: ${inquiry.subject}`); 
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSendEmail = async () => {
    try {
      const response = await axios.post(
        "https://localhost:7082/api/FormData/send-email",
        {
          toEmail: selectedInquiry.email,
          subject: subject,
          message: replyText,
        }
      );

      console.log("Email sent successfully:", response.data);
      setSnackbarMessage("Email sent successfully!");
      setSnackbarOpen(true);
      handleCloseDialog();
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again.");
    }
  };

  return (
    <Container>
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          style={{ color: "#E67E22" }}
        >
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
                <StyledTableCell>Project Budget</StyledTableCell>
                <StyledTableCell>Project Description</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {inquiries.map((inquiry) => (
                <StyledTableRow key={inquiry.id}>
                  <TableCell>
                    {new Date(inquiry.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{inquiry.customerName}</TableCell>
                  <TableCell>{inquiry.email}</TableCell>
                  <TableCell>{inquiry.phone}</TableCell>
                  <TableCell>{inquiry.company}</TableCell>
                  <TableCell>{inquiry.subject}</TableCell>
                  <TableCell>{inquiry.projectBudget}</TableCell>
                  <TableCell>{inquiry.projectDescription}</TableCell>
                  <TableCell>
                    <Select
                      value={inquiry.status}
                      onChange={(e) =>
                        handleStatusChange(inquiry.id, e.target.value)
                      }
                      variant="outlined"
                      size="small"
                      style={{ minWidth: "120px" }}
                    >
                      <MenuItem value="Pending">Pending</MenuItem>
                      <MenuItem value="Work in Progress">
                        Work in Progress
                      </MenuItem>
                      <MenuItem value="Completed">Completed</MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="send email"
                      onClick={() => handleOpenDialog(inquiry)}
                      style={{ color: "#E67E22" }}
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
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle style={{ backgroundColor: "#E67E22", color: "white" }}>
          Reply to {selectedInquiry?.customerName} ({selectedInquiry?.email})
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="subject"
            label="Subject"
            type="text"
            fullWidth
            variant="outlined"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <TextField
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
        <DialogActions style={{ backgroundColor: "#f9f9f9" }}>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSendEmail} style={{ color: "#E67E22" }}>
            Send Email
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default DashboardPage;
