import React, { useState } from 'react';
import { TextField, Button, Box, Grid } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: '',
    });

    const [captchaValue, setCaptchaValue] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!captchaValue) {
            alert("Please complete the CAPTCHA before submitting.");
            return;
        }

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

                    {/* Google reCAPTCHA */}
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <ReCAPTCHA
                            sitekey="YOUR_GOOGLE_RECAPTCHA_SITE_KEY"  // Replace with your actual reCAPTCHA site key
                            onChange={handleCaptchaChange}
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