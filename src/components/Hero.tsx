import React from 'react';
import { Box, Typography, Button } from '@mui/material';

interface HeroProps {
    backGroundImageSrc: string;
    height?: string;
}

const Hero = (props: HeroProps) => {
    return (
        <Box
            sx={{
                position: 'relative',
                height: props.height || '20vh', // Full height of the viewport
                backgroundImage: props.backGroundImageSrc, // Replace with your hero image URL
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: '#fff', // Text color
                padding: 3,
            }}
        >
            <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                Welcome to Our Church
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: 4 }}>
                Join us in our mission to serve and connect with others.
            </Typography>
            <Button variant="contained" color="primary" size="large">
                Get Involved
            </Button>
        </Box>
    );
};

export default Hero;