import React, { useState } from 'react';
import {
  Modal, Box, Typography, TextField, Button, Container, Grid
} from '@mui/material';

const ReferralModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
    course: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ width: 400, margin: '100px auto', padding: 4, backgroundColor: 'white', borderRadius: 2 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          Refer a Friend
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Your Name"
                name="referrerName"
                fullWidth
                value={formData.referrerName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Your Email"
                name="referrerEmail"
                fullWidth
                value={formData.referrerEmail}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Friend's Name"
                name="refereeName"
                fullWidth
                value={formData.refereeName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Friend's Email"
                name="refereeEmail"
                fullWidth
                value={formData.refereeEmail}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Course"
                name="course"
                fullWidth
                value={formData.course}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
};

export default ReferralModal;
