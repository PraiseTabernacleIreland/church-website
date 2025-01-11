import React, { useState } from 'react';
import { TextField, Button, Box, Grid } from '@mui/material';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to an API)
        console.log('Form Submitted:', formData);
    };

    return (
        <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 2 }}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {/* Full Name */}
                    <Grid item xs={12}>
                        <TextField
                            label="Full Name"
                            name="fullName"
                            variant="outlined"
                            fullWidth
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                    </Grid>

                    {/* Email */}
                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            name="email"
                            variant="outlined"
                            fullWidth
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Grid>

                    {/* Message */}
                    <Grid item xs={12}>
                        <TextField
                            label="Message"
                            name="message"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
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
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default ContactForm;