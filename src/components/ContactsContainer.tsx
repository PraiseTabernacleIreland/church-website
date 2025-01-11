import React from 'react';
import { Grid, Container } from '@mui/material';
import ContactCard from './ContactCard';
import Typography from "@mui/material/Typography";
import ContactForm from "./ContactForm";

// Example contact data
const contactDataList = [
    {
        image: 'https://via.placeholder.com/200',
        name: 'John Doe',
        email: 'johndoe@example.com',
        socialLinks: {
            facebook: 'https://facebook.com/johndoe',
            twitter: 'https://twitter.com/johndoe',
            instagram: 'https://instagram.com/johndoe',
        },
    },
    {
        image: 'https://via.placeholder.com/200',
        name: 'Jane Smith',
        email: 'janesmith@example.com',
        socialLinks: {
            facebook: 'https://facebook.com/janesmith',
            twitter: 'https://twitter.com/janesmith',
            instagram: 'https://instagram.com/janesmith',
        },
    },
    {
        image: 'https://via.placeholder.com/200',
        name: 'Alice Brown',
        email: 'alicebrown@example.com',
        socialLinks: {
            facebook: 'https://facebook.com/alicebrown',
            twitter: 'https://twitter.com/alicebrown',
            instagram: 'https://instagram.com/alicebrown',
        },
    },
    // Add more contact objects as needed
];

const ContactsContainer = () => {
    return (
        <Container sx={{ paddingTop: '20px' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}> Team </Typography>
            <Grid container spacing={3} justifyContent="center">
                {contactDataList.map((contact, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <ContactCard contact={contact} />
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}> Contact Us Today </Typography>
            <ContactForm/>
        </Container>
    );
};

export default ContactsContainer;