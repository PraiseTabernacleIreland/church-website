import React from "react";
import { Box } from "@mui/material";
import sunriseGif from '../assets/sunrise.gif';

const GifSection = () => {
    return (    <Box
            sx={{
                width: "100%", // Full width
                display: "flex",
                justifyContent: "center", // Center the GIF horizontally
                alignItems: "center", // Center the GIF vertically (if needed)
                overflow: "hidden",
            }}
        >
            <Box
                component="img"
                src={sunriseGif} // Replace with the actual path to your GIF file
                alt="Animated GIF"
                sx={{
                    maxWidth: "100%",
                    width: "100%", // Full width of the container
                    height: "auto", // Maintain aspect ratio
                    maxHeight: "300px",
                }}
            />
        </Box>
    );
};

export default GifSection;

export const Home = () => {
    return (
        <>
            <GifSection/>
        </>
    )
}


