import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Rating,
  Button,
  TextField,
  Box,
  Snackbar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import StarBorder from '@mui/icons-material/StarBorder';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import axios from 'axios';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('https://localhost:7082/api/reviews');
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const review = {
      name,
      email,
      rating,
      reviewText,
    };
  
    try {
      const response = await axios.post('https://localhost:7082/api/reviews', review, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Review submitted successfully!', response.data);

      setSnackbarMessage('Review submitted successfully!');
      setSnackbarOpen(true);
      fetchReviews(); 
      setName('');
      setEmail('');
      setRating(0);
      setReviewText('');
      setOpenDialog(false); 
    } catch (error) {
  
      setSnackbarMessage('Error submitting review. Please try again.');
      setSnackbarOpen(true);
      console.error('Error submitting review:', error);
    }
  };
  

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, fontFamily: 'Arial, sans-serif' }}>

      {/* Review Blog Section */}
      <Box sx={{ mb: 4, mt: 10 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Welcome to Our Review System
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 2, color: 'text.secondary' }}>
          We value your feedback! Share your thoughts about our services and help us improve.
          Your reviews are important to us and help others make informed decisions.
        </Typography>
        <Typography variant="body1" align="center" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
          "Your voice matters. Let it be heard."
        </Typography>
      </Box>

      {/* Collaboration Company Section */}
      <Box sx={{ overflow: 'hidden', whiteSpace: 'nowrap', mb: 4, display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            display: 'inline-block',
            animation: 'scroll-left linear infinite',
            animationDuration: '20s',
          }}
        >
          <AppleIcon sx={{ fontSize: '2rem', mx: 1, color: 'rgba(0, 0, 0, 0.54)' }} />
          <AndroidIcon sx={{ fontSize: '2rem', mx: 1, color: 'rgba(0, 0, 0, 0.54)' }} />
          <FacebookIcon sx={{ fontSize: '2rem', mx: 1, color: 'rgba(0, 0, 0, 0.54)' }} />
          <TwitterIcon sx={{ fontSize: '2rem', mx: 1, color: 'rgba(0, 0, 0, 0.54)' }} />
          <GitHubIcon sx={{ fontSize: '2rem', mx: 1, color: 'rgba(0, 0, 0, 0.54)' }} />
          <GoogleIcon sx={{ fontSize: '2rem', mx: 1, color: 'rgba(0, 0, 0, 0.54)' }} />
        </Box>
      </Box>

      {/* Reviews Section */}
      <Typography variant="h5" component="h2" align="center" gutterBottom sx={{ mt: 4 }}>
        Reviews
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2, justifyContent: 'center' }}>
        {reviews.map((review) => (
          <Grid item key={review.id} xs={12} sm={6} md={4} lg={3} sx={{mb:5}}>
            <Card sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              p: 2,
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              borderRadius: '8px',
              textAlign: 'center',
              border: '1px solid #eee',
            }}>
              <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                  {review.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {review.email}
                </Typography>
                <Rating value={review.rating} readOnly sx={{ mt: 1, mb: 1, display: 'inline-flex' }} />
                <Typography variant="body1" sx={{ mt: 1, color: 'text.secondary' }}>
                  {review.reviewText}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Submit Review Button */}
      <Box sx={{ mt: 8, mb: 5, display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" color="primary" onClick={handleDialogOpen} sx={{
          backgroundColor: '#1976d2',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '5px',
          '&:hover': {
            backgroundColor: '#1565c0',
          },
        }}>
          Submit Review
        </Button>
      </Box>

      {/* Submit Review Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Submit Your Review</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Rating
                  name="rating"
                  value={rating}
                  onChange={(event, newValue) => setRating(newValue)}
                  emptyIcon={<StarBorder fontSize="inherit" />}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Your Review"
                  multiline
                  rows={4}
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                />
              </Grid>
            </Grid>
            <DialogActions>
              <Button onClick={handleDialogClose}>Cancel</Button>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>

      {/* Snackbar for Success/Error Messages */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />

   
    </Container>
  );
};

export default ReviewsPage;
