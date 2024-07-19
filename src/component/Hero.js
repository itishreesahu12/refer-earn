import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const Hero = ({ onReferNowClick }) => {
  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', padding: '50px 0' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Refer & Earn
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        Refer your friends and earn rewards!
      </Typography>
      <Button variant="contained" color="primary" onClick={onReferNowClick}>
        Refer Now
      </Button>
    </Container>
  );
};

export default Hero;
