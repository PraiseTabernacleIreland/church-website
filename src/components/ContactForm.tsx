import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Grid, Divider, Link, Snackbar, Alert, Typography } from '@mui/material';
import { LocationOn, Phone } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

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
    const [successMessage, setSuccessMessage] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const locationHook = useLocation();

    useEffect(() => {
        setIsSubmitted(false);
    }, [locationHook.pathname]);

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

        setTimeout(() => {
            console.log('Form Submitted:', formData);
            setSuccessMessage(true);
            setIsSubmitted(true);
            setIsSubmitting(false);
            setFormData({ fullName: '', email: '', phone: '', message: '' });
        }, 1000);
    };

    return (
        <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 2, display: 'flex', flexDirection: 'column', gap: 3, position: 'relative' }}>
            {!isSubmitted ? (
                <>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', color: '#055594' }}>
                        Get in Touch
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#555', textAlign: 'center' }}>
                        Our pastoral team is available to offer counsel, encouragement, and prayer whenever you need it.
                        Fill out the form below, give us a call, or visit us in person—we’re excited to connect with you!
                    </Typography>
                    <Divider />
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
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TextField label="Full Name" name="fullName" variant="standard" fullWidth required value={formData.fullName} onChange={handleChange} />
                        <TextField label="Email" name="email" variant="standard" fullWidth required type="email" value={formData.email} onChange={handleChange} />
                        <TextField label="Phone Number" name="phone" variant="standard" fullWidth type="tel" value={formData.phone} onChange={handleChange} />
                        <TextField label="Message" name="message" variant="standard" fullWidth multiline rows={4} required value={formData.message} onChange={handleChange} />
                        <Button type="submit" variant="contained" fullWidth disabled={isSubmitting} sx={{ backgroundColor: '#055594', color: '#fff', fontWeight: 'bold', textTransform: 'none', '&:hover': { backgroundColor: '#033d6c' } }}>
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </Button>
                    </form>
                </>
            ) : (
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#055594', marginBottom: 2 }}>
                        Thank you! Your message has been received.
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 3 }}>
                        We will get back to you soon. If you’d like to send another message, click below.
                    </Typography>
                    <Button variant="contained" onClick={() => setIsSubmitted(false)} sx={{ backgroundColor: '#055594', '&:hover': { backgroundColor: '#033d6c' } }}>
                        Send Another Message
                    </Button>
                </Box>
            )}
            <Snackbar open={successMessage} autoHideDuration={3000} onClose={() => setSuccessMessage(false)} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={() => setSuccessMessage(false)} severity="success" sx={{ width: '100%' }}>
                    Your message has been submitted successfully!
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default ContactForm;
