import React, { useState } from 'react';
import { TextField, Button, Box, Grid, Divider, Link } from '@mui/material';
import Typography from "@mui/material/Typography";
import { LocationOn, Phone } from '@mui/icons-material';

const location = "Praise Tabernacle Apostolic Faith Mission, 1, 8 Portland Row, Mountjoy, Dublin";
const url = `https://www.google.com/maps?q=${encodeURIComponent(location)}`;

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
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                Get in Touch
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: '#555' }}>
                Our pastoral team is available to offer counsel, encouragement, and prayer whenever you need it.
                Fill out the form below, give us a call, or visit us in person—we’re excited to connect with you!
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Box sx={{ mb: 3 }}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Phone sx={{ color: "#055594", mr: 1 }} />
                        <Link href="tel:+12095550104" variant="body2" sx={{ color: "#333", textDecoration: "none", "&:hover": { color: "#055594" } }}>
                            (209) 555-0104
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <LocationOn sx={{ color: "#055594", mr: 1 }} />
                        <Link href={url} target="_blank" variant="body2" sx={{ color: "#333", textDecoration: "none", "&:hover": { color: "#055594" } }}>
                            8 Portland Row, Mountjoy, Dublin 1
                        </Link>
                    </Grid>
                </Grid>
            </Box>

            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
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

                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            disabled={isSubmitting}
                            sx={{
                                backgroundColor: '#055594',
                                color: '#fff',
                                fontWeight: 'bold',
                                textTransform: 'none',
                                '&:hover': {
                                    backgroundColor: '#033d6c',
                                },
                            }}
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