import {Box, Card, CardActionArea, CardMedia, Typography} from "@mui/material";
import React from "react";

function HoverCard() {

    const handleCardClick = () => {
        // Replace with your destination URL
    };

    return (
        <Card sx={{width: 345, boxShadow: 3, borderRadius: 2}}>
            <CardActionArea onClick={handleCardClick}>
                <Box sx={{position: 'relative', height: 200}}>
                    <CardMedia
                        component="img"
                        image="/assets/revival3.jpg"  // Your background image
                        alt="background"
                        sx={{
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease',  // Smooth transition for hover effect
                            '&:hover': {
                                transform: 'scale(1.1)',  // Scale image on hover
                            },
                        }}
                    />
                </Box>
                <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                    <Typography sx={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
                        EVENTS
                    </Typography>
                </Box>
            </CardActionArea>
        </Card>
    );
}

export default HoverCard;
