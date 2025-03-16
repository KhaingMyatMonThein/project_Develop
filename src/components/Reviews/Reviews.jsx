import React, { useState, useEffect } from 'react';
import { 
  Typography, 
  Container, 
  Box, 
  Grid, 
  Rating, 
  TextField, 
  Button, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions 
} from '@mui/material';

const Reviews = () => {
  const defaultReviews = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      rating: 5,
      reviewText: 'Excellent service! Highly recommended.',
      photo: 'https://via.placeholder.com/150',
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      rating: 4,
      reviewText: 'Good experience overall. Would use again.',
      photo: 'https://via.placeholder.com/150',
    },
    {
      name: 'Company Review',
      email: 'info@company.com',
      rating: 5,
      reviewText: 'We are very satisfied with the service provided.',
      photo: 'https://via.placeholder.com/150',
    },
    {
      name: 'Emily Johnson',
      email: 'emily@example.com',
      rating: 4,
      reviewText: 'Great product quality. Highly recommended.',
      photo: 'https://via.placeholder.com/150',
    },
    {
      name: 'David Lee',
      email: 'david@example.com',
      rating: 5,
      reviewText: 'Excellent customer service. Very helpful.',
      photo: 'https://via.placeholder.com/150',
    },
    {
      name: 'Sophia Brown',
      email: 'sophia@example.com',
      rating: 4,
      reviewText: 'Good value for money. Would purchase again.',
      photo: 'https://via.placeholder.com/150',
    },
    {
      name: 'Michael Davis',
      email: 'michael@example.com',
      rating: 5,
      reviewText: 'Fantastic experience. Highly recommended.',
      photo: 'https://via.placeholder.com/150',
    },
    {
      name: 'Olivia Taylor',
      email: 'olivia@example.com',
      rating: 4,
      reviewText: 'Good product, but delivery took a bit long.',
      photo: 'https://via.placeholder.com/150',
    },
    {
      name: 'William White',
      email: 'william@example.com',
      rating: 5,
      reviewText: 'Excellent service. Highly recommended.',
      photo: 'https://via.placeholder.com/150',
    },
    {
      name: 'Ava Martin',
      email: 'ava@example.com',
      rating: 4,
      reviewText: 'Good experience. Would use again.',
      photo: 'https://via.placeholder.com/150',
    },
  ];

  const [reviews, setReviews] = useState(defaultReviews);
  const [rating, setRating] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [showForm, setShowForm] = useState(false);

  // useEffect(() => {
  //   fetch('https://localhost:5001/api/reviews')
  //     .then(response => response.json())
  //     .then(data => setReviews([...defaultReviews, ...data]));
  // }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const review = { rating, name, email, reviewText, photo: 'https://via.placeholder.com/150' };
    fetch('https://localhost:5001/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(review),
    })
      .then(() => {
        fetch('https://localhost:5001/api/reviews')
          .then(response => response.json())
          .then(data => setReviews([...defaultReviews, ...data]));
        setShowForm(false);
      });
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Reviews
      </Typography>

      {/* Button to Show Form */}
      {!showForm && (
        <Button variant="contained" onClick={handleShowForm} sx={{ mb: 2 }}>
          Leave a Review
        </Button>
      )}

      {/* Display Reviews */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {reviews.map((review, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                image={review.photo}
                alt={review.name}
                sx={{ height: 150 }}
              />
              <CardContent>
                <Typography variant="body1">
                  <strong>{review.name}</strong> ({review.email})
                </Typography>
                <Rating value={review.rating} readOnly />
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {review.reviewText}
                </Typography>
              </CardContent>
              <CardActions sx={{ mt: 'auto' }}>
                <Button size="small">Like</Button>
                <Button size="small">Reply</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Submit Review Form */}
      {showForm && (
        <Box sx={{ mt: 4 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="name"
                  name="name"
                  label="Name"
                  fullWidth
                  autoComplete="given-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Rating
                  name="rating"
                  value={rating}
                  onChange={(event, newValue) => {
                    setRating(newValue);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="reviewText"
                  name="reviewText"
                  label="Your Review"
                  multiline
                  rows={4}
                  fullWidth
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained">Submit Review</Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      )}
    </Container>
  );
};

export default Reviews;
