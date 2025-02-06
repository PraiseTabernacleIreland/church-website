import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const ContactCard = ({ contact }) => {
    return (
        <Card sx={{ textAlign: 'center', padding: 3, borderRadius: "16px", boxShadow: 3 }}>

            {/* Ministry or Group */}
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#7b523a", mb: 1 }}>
                {contact.ministry}
            </Typography>

            {/* Circular Image with Black & White Effect */}
            <Box
                sx={{
                    width: "180px",
                    height: "180px",
                    margin: "0 auto",
                    borderRadius: "50%",
                    overflow: "hidden",
                    filter: "grayscale(100%)",
                }}
            >
                <CardMedia
                    component="img"
                    image={contact.image}
                    alt={contact.name}
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </Box>

            <CardContent>
                {/* Name & Title */}
                <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
                    {contact.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: "italic" }}>
                    {contact.title}
                </Typography>

                {/* Email */}
                <Typography
                    variant="body2"
                    sx={{ mt: 1, color: "#1976d2", textDecoration: "underline", cursor: "pointer" }}
                    onClick={() => window.location.href = `mailto:${contact.email}`}
                >
                    {contact.email}
                </Typography>

                {/* Description */}
                <Typography variant="body2" sx={{ mt: 2, color: "#555" }}>
                    {contact.description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ContactCard;