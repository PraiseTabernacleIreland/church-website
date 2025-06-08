import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid, IconButton, FormControlLabel, Checkbox, MenuItem } from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import Hero from "../components/Hero";
import { PageName, PageRoutes } from "../utils/routes";
import { Link } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import CountyMap from "../components/CellGroups";

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;


const countyCoordinates = {
    'Dublin': { lat: 53.349805, lng: -6.26031 },
    'Cork': { lat: 51.8985, lng: -8.4756 },
    'Galway': { lat: 53.2707, lng: -9.0568 },
    'Limerick': { lat: 52.6638, lng: -8.6267 },
    'Waterford': { lat: 52.2583, lng: -7.1194 },
    'Wexford': { lat: 52.3361, lng: -6.4629 },
    'Kilkenny': { lat: 52.6541, lng: -7.2448 },
    'Kerry': { lat: 52.1545, lng: -9.5669 },
    'Clare': { lat: 52.9045, lng: -9.4905 },
    'Mayo': { lat: 53.8008, lng: -9.5228 },
    'Donegal': { lat: 54.6538, lng: -8.1096 },
    'Sligo': { lat: 54.2766, lng: -8.4761 },
    'Leitrim': { lat: 54.1937, lng: -8.0189 },
    'Roscommon': { lat: 53.6272, lng: -8.1894 },
    'Westmeath': { lat: 53.534, lng: -7.4653 },
    'Longford': { lat: 53.7274, lng: -7.7939 },
    'Offaly': { lat: 53.2734, lng: -7.4886 },
    'Laois': { lat: 53.0322, lng: -7.2994 },
    'Tipperary': { lat: 52.4735, lng: -8.1619 },
    'Carlow': { lat: 52.8365, lng: -6.9341 },
    'Kildare': { lat: 53.212, lng: -6.8199 },
    'Meath': { lat: 53.6054, lng: -6.6564 },
    'Louth': { lat: 53.9142, lng: -6.5416 },
    'Monaghan': { lat: 54.249, lng: -6.9681 },
    'Cavan': { lat: 53.991, lng: -7.3607 },
    'Wicklow': { lat: 52.9801, lng: -6.0498 }
};


const ChurchRegistration = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        county: '',
        familyMembers: [],
        termsAccepted: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submittedCounty, setSubmittedCounty] = useState(null);

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

        setTimeout(() => {
            console.log('Registration Form Submitted:', formData);
            setSubmittedCounty(formData.county);
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
                            select
                            label="County"
                            name="county"
                            variant="standard"
                            fullWidth
                            required
                            value={formData.county}
                            onChange={handleChange}
                        >
                            {Object.keys(countyCoordinates).map((county) => (
                                <MenuItem key={county} value={county}>
                                    {county}
                                </MenuItem>
                            ))}
                        </TextField>
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

            {submittedCounty && (
                <Box sx={{ mt: 4, height: '400px' }}>
                    <CountyMap submittedCounty={submittedCounty}/>
                </Box>
            )}
        </Box>
    );
};

export default ChurchRegistration;

export const Registration = () => {
    return (
        <>
            <Hero
                backGroundImageSrc={`url(/assets/img_1.png)`}
                height={'40vh'}
                title={'Join Our Church Family'}
                message={'Fill out the form below to become a part of our church community. We look forward to welcoming you!'}
            />
            <ChurchRegistration />
        </>
    );
};
