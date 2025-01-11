import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Box } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const ContactCard = ({ contact }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: '20px', boxShadow: 3 }}>
            {/* Contact Image */}
            <CardMedia
                component="img"
                height="200"
                image={contact.image}
                alt={`${contact.name}'s profile`}
            />

            <CardContent>
                {/* Name */}
                <Typography variant="h6" component="div" gutterBottom>
                    {contact.name}
                </Typography>

                {/* Email */}
                <Typography variant="body2" color="textSecondary" paragraph>
                    {contact.email}
                </Typography>

                {/* Social Media Links */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <IconButton
                        href={contact.socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                    >
                        <Facebook />
                    </IconButton>
                    <IconButton
                        href={contact.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                    >
                        <Twitter />
                    </IconButton>
                    <IconButton
                        href={contact.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                    >
                        <Instagram />
                    </IconButton>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ContactCard;