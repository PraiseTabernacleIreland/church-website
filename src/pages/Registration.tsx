import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid, IconButton, Divider, FormControlLabel, Checkbox } from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import Hero from "../components/Hero";
import {PageName, PageRoutes} from "../utils/routes";
import { Link } from 'react-router-dom';

const ChurchRegistration = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        familyMembers: [],
        termsAccepted: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleFamilyMemberChange = (index, field, value) => {
        const updatedFamilyMembers = [...formData.familyMembers];
        updatedFamilyMembers[index][field] = value;
        setFormData((prevData) => ({ ...prevData, familyMembers: updatedFamilyMembers }));
    };

    const addFamilyMember = () => {
        setFormData((prevData) => ({
            ...prevData,
            familyMembers: [...prevData.familyMembers, { relationship: '', name: '' }],
        }));
    };

    const removeFamilyMember = (index) => {
        const updatedFamilyMembers = formData.familyMembers.filter((_, i) => i !== index);
        setFormData((prevData) => ({ ...prevData, familyMembers: updatedFamilyMembers }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.termsAccepted) {
            alert("You must accept the terms and conditions before registering.");
            return;
        }

        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            console.log('Registration Form Submitted:', formData);
            alert("Registration submitted successfully!");
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <Box sx={{ maxWidth: 700, margin: '0 auto', padding: 3 }}>
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
                            required
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Address"
                            name="address"
                            variant="standard"
                            fullWidth
                            required
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h6" sx={{ mb: 1 }}>Family Members</Typography>
                        {formData.familyMembers.map((member, index) => (
                            <Grid container spacing={1} key={index} alignItems="center" sx={{ mb: 1 }}>
                                <Grid item xs={5}>
                                    <TextField
                                        label="Relationship"
                                        variant="standard"
                                        fullWidth
                                        value={member.relationship}
                                        onChange={(e) => handleFamilyMemberChange(index, 'relationship', e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={5}>
                                    <TextField
                                        label="Name"
                                        variant="standard"
                                        fullWidth
                                        value={member.name}
                                        onChange={(e) => handleFamilyMemberChange(index, 'name', e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <IconButton onClick={() => removeFamilyMember(index)} color="error">
                                        <RemoveCircleOutline />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        ))}
                        <Button
                            variant="outlined"
                            startIcon={<AddCircleOutline />}
                            onClick={addFamilyMember}
                            sx={{ mt: 1 }}
                        >
                            Add Family Member
                        </Button>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="termsAccepted"
                                    checked={formData.termsAccepted}
                                    onChange={handleChange}
                                    sx={{ color: '#055594', '&.Mui-checked': { color: '#055594' } }}
                                />
                            }
                            label={<Typography variant="body2">I acknowledge that I have read and agree with the church's beliefs.</Typography>}
                        />
                        <Typography variant="body2" sx={{ mt: 1, color: '#555' }}>
                            Please review our <Link to={PageRoutes[PageName.Our_Beliefs]} style={{ color: '#055594' }}>beliefs</Link> before registering.
                        </Typography>
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
                            {isSubmitting ? "Submitting..." : "Register Now"}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default ChurchRegistration;

export const Registration = () => {
    return (
        <>
            <Hero
                backGroundImageSrc={`url(${process.env.PUBLIC_URL}/assets/img_1.png)`}
                height={'40vh'}
                title={'Join Our Church Family'}
                message={'Fill out the form below to become a part of our church community. We look forward to welcoming you!'}
            />
            <ChurchRegistration />
        </>
    );
};
