import React, { useState } from 'react';
import { TextField, Button, Box, Grid, Divider } from '@mui/material';
import Typography from "@mui/material/Typography";
import {LocationOn, Phone } from '@mui/icons-material';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            console.log('Form Submitted:', formData);
            alert("Form submitted successfully!");
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 2 }}>
            <Typography variant="body1" sx={{ mb: 3, color: '#555' }}>
                Our pastoral team is available to offer counsel, encouragement, and prayer whenever you need it.
                Fill out the form below, give us a call, or visit us in person—we’re excited to connect with you!
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Box sx={{ mb: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Phone sx={{ color: '#7b523a', mr: 1 }} />
                        <Typography variant="body2">(209) 555-0104</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
                        <LocationOn sx={{ color: '#7b523a', mr: 1 }} />
                        <Typography variant="body2">9 Portland Row, Mountjoy, Dublin 1</Typography>
                    </Grid>
                </Grid>
            </Box>

            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>

                    {/* Full Name (Required) */}
                    <Grid item xs={12}>
                        <TextField
                            label="Full Name"
                            name="fullName"
                            variant="standard"
                            fullWidth
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                    </Grid>

                    {/* Email (Required) */}
                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            name="email"
                            variant="standard"
                            fullWidth
                            required
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Grid>

                    {/* Phone Number (Not Required) */}
                    <Grid item xs={12}>
                        <TextField
                            label="Phone Number"
                            name="phone"
                            variant="standard"
                            fullWidth
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </Grid>

                    {/* Message (Required) */}
                    <Grid item xs={12}>
                        <TextField
                            label="Message"
                            name="message"
                            variant="standard"
                            fullWidth
                            multiline
                            rows={4}
                            required
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </Grid>

                    {/* Submit Button */}
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default ContactForm;